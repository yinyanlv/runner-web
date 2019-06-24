import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import login from '../pages/Login/reducer';
import home from '../pages/Home/reducer';
import user from './user/user.reducer';
import category from './category/category.reducer';

declare const window: any;

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true
}) || compose;

const reducers = combineReducers({
    login,
    home,
    user,
    category
});

const enhancer = composeEnhancer(applyMiddleware(thunk));

const store = createStore(reducers, enhancer);

export default store;