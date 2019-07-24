import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import login from '../pages/Login/reducer';
import register from '../pages/Register/reducer';
import home from '../pages/Home/reducer';
import topicDetail from '../pages/topic/Detail/reducer';
import user from './user/user.reducer';
import category from './category/category.reducer';

declare const window: any;

const composeEnhancer =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true
}) : compose;

const reducers = combineReducers({
    login,
    register,
    home,
    user,
    category,
    topicDetail
});

const enhancer = composeEnhancer(applyMiddleware(thunk));

const store = createStore(reducers, enhancer);

export default store;
