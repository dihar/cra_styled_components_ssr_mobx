import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DefaultLoading from '../components/DefaultLoading';
import NotFound from '../pages/NotFound';
import list from './list';

const preparedRouteList = Object.entries(list)
  .map(([key, {
    loading = DefaultLoading,
    exact = true,
    route = Route,
    ...rest
  }]) => ({
      ...rest,
      id: key,
      loading,
      exact,
      route
  }));

export default () => (
  <Switch>
    {preparedRouteList.map(item => (
      <item.route key={item.id} exact={item.exact} path={item.path} component={item.component} />
    ))}
    <Route component={NotFound} />
  </Switch>
);
