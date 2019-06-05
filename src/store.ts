import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import login from './pages/Login/reducer';
import home from './pages/Home/reducer';

declare const window: any;

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true
}) || compose;

const reducers = combineReducers({
    login,
    home
});

const enhancer = composeEnhancer(applyMiddleware(thunk));

const store = createStore(reducers, enhancer);

export default store;