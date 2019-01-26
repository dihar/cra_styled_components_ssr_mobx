import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Page from '../../components/Page';
import { LogoutStyled } from './styles';

const LogoutMeta = {
  title: 'Logout page'
};

export default
@withRouter
@inject('store')
@observer
class Logout extends Component {
  render() {
    return (
      <Page {...LogoutMeta}>
        <LogoutStyled onClick={this.props.store.appStore.authenticate}>Logout</LogoutStyled>
      </Page>
    );
  }
}
