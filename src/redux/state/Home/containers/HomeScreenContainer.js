import { connect } from "react-redux";
import {
    getProductsData,
    initHomeScreenComponent, updateCounter,
} from '../modules/homeScreen';
import HomeComponent from "../../../../pages/Homepage/HomePageComponent";

const mapStateToProp = (state) => ({
    loading             : state.home.loading || false,
    err                 : state.home.err || false,
    errSeverity         : state.home.errSeverity || false,
    productsData        : state.home.productsData || []
});

const mapActionCreators = {
    initHomeScreenComponent,
    getProductsData,
    updateCounter
};

export default connect(mapStateToProp, mapActionCreators)(HomeComponent);
