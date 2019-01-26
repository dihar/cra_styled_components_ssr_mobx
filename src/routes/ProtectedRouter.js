import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import routeList from './list';

export default
@inject('store')
@observer
class ProtectedRouter extends Component {
  render() {
    const { component: Page, store: { appStore }, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props =>
          appStore.authenticated ? (
            <Page {...props} />
          ) : (
            <Redirect to={routeList.home.path} />
          )
        }
      />
    );
  }
}
