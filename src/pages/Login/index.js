import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Page from '../../components/Page';
import { LoginStyled } from './styles';

const LoginMeta = {
  title: 'Login page'
};

export default
@withRouter
@inject('store')
@observer
class Login extends Component {
  render() {
    return (
      <Page {...LoginMeta}>
        <LoginStyled onClick={this.props.store.appStore.authenticate}>Login</LoginStyled>
      </Page>
    );
  }
}
