import { combineReducers } from 'redux';

// calling the default reducer to create a link
import {HomeScreenReducer as home} from '../../redux/state/Home/modules/homeScreen';
import {CartScreenReducer as cart} from '../../redux/state/Cart/modules/cartScreen';

const rootReducers = combineReducers({
    // add reducer files references here
    home,
    cart
});

export default rootReducers;
