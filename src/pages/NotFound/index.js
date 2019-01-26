import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Page from '../../components/Page';

const NotFoundMeta = {
  title: 'Not found',
  noCrawl: true
};

export default
@withRouter
class Home extends Component {
  render() {
    return (
      <Page {...NotFoundMeta}>
        Not found, go to <br />
        <Link to='/'>home</Link>
      </Page>
    );
  }
}
