import React from 'react';
import {Redirect} from 'react-router-dom';
import {RouteConfig} from 'react-router-config';
import Loadable from 'react-loadable';
import {roles} from '../../components/Auth';
import {Loading} from '../../components/Loading';

const PageLogin = Loadable({
    loader: () => import('../../pages/Login'),
    loading: Loading
});

const PageRegister = Loadable({
    loader: () => import('../../pages/Register'),
    loading: Loading
});

const PageHome = Loadable({
    loader: () => import('../../pages/Home'),
    loading: Loading
});

const PageTopicEdit = Loadable({
    loader: () => import('../../pages/topic/Edit'),
    loading: Loading
});

const PageTopicDetail = Loadable({
    loader: () => import('../../pages/topic/Detail'),
    loading: Loading
});

export const routes: RouteConfig[] = [{
    path: '/login',
    exact: true,
    component: PageLogin
}, {
    path: '/register',
    exact: true,
    component: PageRegister
}, {
    path: '/',
    exact: true,
    component: PageHome
}, {
    auth: roles.admin,
    path: '/topic/create',
    exact: true,
    component: PageTopicEdit
}, {
    auth: roles.admin,
    path: '/topic/edit/:id"',
    exact: true,
    component: PageTopicEdit
}, {
    path: '/topic/detail/:id',
    exact: true,
    component: PageTopicDetail
}, {
    component: () => <Redirect to="/404" />
}];