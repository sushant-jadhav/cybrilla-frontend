import { combineReducers } from 'redux';

// calling the default reducer to create a link
import {HomeScreenReducer as home} from '../../redux/state/Home/modules/homeScreen';

const rootReducers = combineReducers({
    // add reducer files references here
    home
});

export default rootReducers;
