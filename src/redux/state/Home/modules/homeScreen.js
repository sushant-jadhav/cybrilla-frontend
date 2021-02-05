import update from "react-addons-update";
import constants from "./actionConstants";
import request from "../../../../util/appRequest";

//Constants
const {
    INIT_HOME_SCREEN,
    HOME_SCREEN_BEGIN,
    HOME_SCREEN_RESET,
    HOME_SCREEN_ERROR,
    HOME_SCREEN_PRODUCT,
    HOME_SCREEN_UPDATE_COUNTER
} = constants;

//==============================
//Actions
//==============================

export function initHomeScreenComponent() {
    return (dispatch, store) => {
        dispatch({
            type:INIT_HOME_SCREEN
        });
    }
}

export function homeScreenBegin() {
    return {
        type: HOME_SCREEN_BEGIN
    }
}

export function homeScreenError(payload) {
    return {
        type: HOME_SCREEN_ERROR,
        payload: {
            error: payload.error,
            errSeverity: payload.errSeverity
        }
    }
}

export function homeScreenReset() {
    return {
        type: HOME_SCREEN_RESET
    }
}

export function getProductsData(payload={}) {
    return (dispatch, store) => {
        let request_url;
        request_url = 'product';

        request.get(request_url, {})
            .then(res => {
                console.log('getProductsData res',res);
                if (!res.data.success) {
                    throw(res.data.err);
                }
                let prodData;
                if(res.data.data.length>0){
                    let data = res.data.data;
                    prodData = data.map(el=>{
                        el.quantity = 0;
                        return el
                    })
                }else{
                    prodData = [];
                }

                dispatch({
                    type:HOME_SCREEN_PRODUCT,
                    payload:{
                        productsData:prodData
                    }
                });
                // removeLoadingBlock();
            }).catch(err => {
            console.log(err);
            dispatch(homeScreenError({
                err: 'Something went wrong',
                errSeverity: 0
            }));
            // removeLoadingBlock();
        });
        return payload;
    }
}

export function updateCounter(payload={}) {
    return (dispatch, store) => {
        dispatch({
            type:HOME_SCREEN_UPDATE_COUNTER,
            payload:{
                index:payload.index,
                quantity:payload.quantity
            }
        })
    };
}


export function redirectToLogIn() {
}

//==============================
//Action handlers
//==============================

function handleInitHomeScreen(state, action) {
    return update(state, {
        // categoryData: { $set: [] }
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
        productsData: { $set: action.payload.productsData },
    })
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
    INIT_HOME_SCREEN:handleInitHomeScreen,
    HOME_SCREEN_BEGIN:handleHomeScreenBegin,
    HOME_SCREEN_RESET:handleHomeScreenReset,
    HOME_SCREEN_ERROR:handleHomeScreenError,
    HOME_SCREEN_PRODUCT:handleHomeProducts,
    HOME_SCREEN_UPDATE_COUNTER: handleUpdateProductsQuantity
};

const initialState = {
    loading: false,
    err: null,
    errSeverity:null,
    productsData:[],
};

export function HomeScreenReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
};
