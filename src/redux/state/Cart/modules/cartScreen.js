import update from "react-addons-update";
import constants from "./actionConstants";
import request from "../../../../util/appRequest";

//Constants
const {
    INIT_CART_SCREEN,
    CART_SCREEN_BEGIN,
    CART_SCREEN_RESET,
    CART_SCREEN_ERROR,
    CART_SCREEN_PRODUCT,
    CART_SCREEN_UPDATE_COUNTER,
    CART_SCREEN_SELECT_PRODUCT,
    CART_SCREEN_PRE_SELECT_PRODUCT,
    CART_SCREEN_PRODUCTS
} = constants;

//==============================
//Actions
//==============================

export function initCartScreenComponent() {
    return (dispatch, store) => {
        dispatch({
            type:INIT_CART_SCREEN
        });
    }
}

export function cartScreenBegin() {
    return {
        type: CART_SCREEN_BEGIN
    }
}

export function cartScreenError(payload) {
    return {
        type: CART_SCREEN_ERROR,
        payload: {
            error: payload.error,
            errSeverity: payload.errSeverity
        }
    }
}

export function cartScreenReset() {
    return {
        type: CART_SCREEN_RESET
    }
}

export function getCartProductsData(payload={}) {
    return (dispatch, store) => {
        let cart_ids = store().cart.selectedProducts.join(',');
        let request_url;
        request_url = 'cart/product?cart_ids='+cart_ids;

        request.get(request_url, {})
            .then(res => {
                console.log('getCartProductsData res',res);
                if (!res.data.success) {
                    throw(res.data.err);
                }
                let prodData = res.data.data;

                dispatch({
                    type:CART_SCREEN_PRODUCT,
                    payload:{
                        cartProducts:prodData.cart_data,
                        discountData:prodData.discount_data
                    }
                });
                // removeLoadingBlock();
            }).catch(err => {
            console.log(err);
            dispatch(cartScreenError({
                err: 'Something went wrong',
                errSeverity: 0
            }));
            // removeLoadingBlock();
        });
        return payload;
    }
}

export function updateCartCounter(payload={}) {
    return (dispatch, store) => {
        dispatch({
            type:CART_SCREEN_UPDATE_COUNTER,
            payload:{
                index:payload.index,
                quantity:payload.quantity
            }
        })
    };
}

export function addSelectedCartProduct(payload={}) {
    return (dispatch, store) => {
        dispatch({
            type:CART_SCREEN_SELECT_PRODUCT,
            payload:{
                cart_id : payload.cart_id
            }
        });
        dispatch(getCartProductsData());
    }
}

export function addSelectedProduct(payload={}) {
    return (dispatch, store) => {
        console.log('selectedProducts',store().cart.selectedProducts,payload);
        let existProduct = store().cart.selectedProducts.findIndex(product => {
            return product.id === payload.product.id
        });
        console.log(existProduct,payload.product);

        dispatch({
            type:CART_SCREEN_SELECT_PRODUCT,
            payload:{
                type:existProduct===-1?'push':'update',
                selectedProducts:payload.product,
                index:existProduct,
                quantity:payload.product.quantity
            }
        });
        // if(existProduct){

        // }else{
        //     dispatch({
        //         type:CART_SCREEN_SELECT_PRODUCT,
        //         payload:{
        //             selectedProducts:payload.product
        //         }
        //     })
        // }
        return true;
    };
}


export function redirectToLogIn() {
}

//==============================
//Action handlers
//==============================

function handleInitHomeScreen(state, action) {
    return update(state, {
        cartProducts: { $set: [] },
        discountData:{ $set : null}
    })
}


function handleHomeScreenBegin(state) {
    return update(state, {
        loading: { $set: true },
        err: { $set: null },
        errSeverity: { $set: 0 },
    })
}

function handleHomeScreenError(state, action) {
    return update(state, {
        loading: { $set: false },
        err: { $set: action.payload.error },
        errSeverity: { $set: action.payload.errSeverity }
    })
}

function handleHomeScreenReset(state) {
    return update(state, {
        loading: { $set: false },
        err: { $set: null },
        errSeverity: { $set: 0 },
    })
}


function handleHomeProducts(state,action) {
    return update(state, {
        cartProducts: { $set: action.payload.cartProducts },
        discountData: { $set: action.payload.discountData },
    })
}

function handleCartProduct(state,action) {
    return update(state, {
        cartProducts: { $set: action.payload.cartProducts },
    })
}

function handleSelectProduct(state,action) {
    return update(state, {
        selectedProducts: {$push: [action.payload.cart_id]},
    });

    // if(action.payload.type ==='push') {
    //     return update(state, {
    //         selectedProducts: {$push: [action.payload.selectedProducts]},
    //     });
    // }else{
    //     let newOrderData = state.selectedProducts;
    //     let cartProduct = newOrderData[action.payload.index];
    //     cartProduct.quantity = action.payload.quantity;
    //
    //     return update(state, {
    //         // orderProducts: {$set : newOrderData},
    //         selectedProducts: {[action.payload.index]:{$set : cartProduct}},
    //     });
    // }

    // let selectProduct = [...state.selectedProducts, action.payload.selectedProducts];
    // return update(state, {
    //     selectedProducts: { $set: selectProduct },
    // })
}

function handlePreSelectedProduct(state,action) {
    if(action.payload.type ==='push') {
        return update(state, {
            orderProducts: {$push: [action.payload.orderProducts]},
        });
    }else{
        let newOrderData = state.orderProducts;
        let cartProduct = newOrderData[action.payload.index];
        // newOrderData[action.payload.index] = cartProduct;
        return update(state, {
            // orderProducts: {$set : newOrderData},
            orderProducts: {[action.payload.index]:{$set : cartProduct}},
        });
    }
    // return update(state, {
    //     selectedProducts: { $set: {[action.payload.index]:action.payload.selectedProducts} },
    // })
}

function handleUpdateProductsQuantity(state,action) {
    let product = state.productsData;
    let updateProduct = product[action.payload.index];
    updateProduct.quantity = action.payload.quantity;
    return update(state, {
        ordersData: { $set: {
            [action.payload.index]:updateProduct
        }},
    })
}


const ACTION_HANDLERS = {
    INIT_CART_SCREEN:handleInitHomeScreen,
    CART_SCREEN_BEGIN:handleHomeScreenBegin,
    CART_SCREEN_RESET:handleHomeScreenReset,
    CART_SCREEN_ERROR:handleHomeScreenError,
    CART_SCREEN_PRODUCT:handleHomeProducts,
    CART_SCREEN_UPDATE_COUNTER: handleUpdateProductsQuantity,
    CART_SCREEN_SELECT_PRODUCT: handleSelectProduct,
    CART_SCREEN_PRE_SELECT_PRODUCT: handlePreSelectedProduct,
    CART_SCREEN_PRODUCTS: handleCartProduct,
};

const initialState = {
    loading: false,
    err: null,
    errSeverity:null,
    cartProducts:[],
    selectedProducts:[],
    discountData:null
};

export function CartScreenReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};
