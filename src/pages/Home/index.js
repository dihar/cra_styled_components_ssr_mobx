import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import Page from '../../components/Page';

const HomeMeta = {
  title: 'Home page'
};

export default
@withRouter
@observer
class Home extends Component {
  render() {
    return (
      <Page {...HomeMeta}>
        Home page
      </Page>
    );
  }
}
