import { connect } from "react-redux";
import {
    addSelectedProduct,
    addToCartProduct, getAllCartProducts, getCartProductsData,
    getProductsData,
    initCartScreenComponent, updateCartCounter,
} from '../modules/cartScreen';
import CartComponent from "../../../../pages/Cartpage/CartPageComponent";

const mapStateToProp = (state) => ({
    loading             : state.cart.loading || false,
    err                 : state.cart.err || false,
    errSeverity         : state.cart.errSeverity || false,
    cartProducts        : state.cart.cartProducts || [],
    selectedProducts    : state.cart.selectedProducts || [],
    discountData        : state.cart.discountData || null
});

const mapActionCreators = {
    initCartScreenComponent,
    getCartProductsData,
    updateCartCounter,
    getAllCartProducts
};

export default connect(mapStateToProp, mapActionCreators)(CartComponent);
