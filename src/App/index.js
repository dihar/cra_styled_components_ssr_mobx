import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Routes from '../routes';
import { AppStyled } from './styles';
import Menu from '../components/Menu';
import { MenuItems } from './constants';

@withRouter
@inject('store')
@observer
class App extends Component {
  render() {
    const { location, store: { appStore } } = this.props;
    const menuItems = MenuItems.map(item => ({
      ...item,
      to: item.router.path,
      isActive: item.router.path === location.pathname
    })).filter(item => item.isVisible ? item.isVisible(appStore.authenticated) : true);

    return (
      <AppStyled>
        <Routes />
        <Menu menuItems={menuItems} />
      </AppStyled>
    );
  }
}

export default App;
