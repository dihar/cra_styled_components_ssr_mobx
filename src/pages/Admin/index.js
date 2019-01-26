import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Page from '../../components/Page';

const AdminMeta = {
  title: 'Admin page'
};

export default
@withRouter
@observer
class Admin extends Component {
  render() {
    return (
      <Page {...AdminMeta}>
        Admin page
      </Page>
    );
  }
}
