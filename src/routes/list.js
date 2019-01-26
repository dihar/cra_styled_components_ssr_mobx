import React from 'react';
import Loadable from 'react-loadable';
import DefaultLoading from '../components/DefaultLoading';
import ProtectedRouter from './ProtectedRouter';
import LoginRouter from './LoginRouter';

const defaultloading = () => <DefaultLoading />;

const HomePage = Loadable({
  loader: () => import('../pages/Home'),
  loading: defaultloading,
  modules: ['home']
});

const AdminPage = Loadable({
  loader: () => import('../pages/Admin'),
  loading: defaultloading,
  modules: ['admin']
});

const LoginPage = Loadable({
  loader: () => import('../pages/Login'),
  loading: defaultloading,
  modules: ['login']
});

const LogoutPage = Loadable({
  loader: () => import('../pages/Logout'),
  loading: defaultloading,
  modules: ['logout']
});

export default {
  home: {
    path: '/',
    component: HomePage,
  },
  admin: {
    path: '/admin',
    exact: false,
    component: AdminPage,
    route: ProtectedRouter,
  },
  login: {
    path: '/login',
    component: LoginPage,
    route: LoginRouter,
  },
  logout: {
    path: '/logout',
    component: LogoutPage,
    route: ProtectedRouter,
  },
};
