//Table Redux
import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import reducers from '../store/reducers';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import { persistStore, persistReducer,autoRehydrate } from 'redux-persist'
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const appPersistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(appPersistConfig, reducers);

let middleware = [];
if (process.env.NODE_ENV === 'development') {
    middleware = [...middleware, ReduxPromise,thunk,logger];
} else {
    middleware = [...middleware, ReduxPromise,thunk];
}

export const appStore = createStore(
    persistedReducer,
    compose(
        applyMiddleware(...middleware)
    )
);
export const appPersistor = persistStore(appStore);
