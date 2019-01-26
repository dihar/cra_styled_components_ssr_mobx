import React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider } from 'mobx-react';
import Loadable from 'react-loadable';
import { Frontload } from 'react-frontload';
import { BrowserRouter as Router } from 'react-router-dom';
import RootStore from './stores/RootStore';

import App from './App';
import './index.css';

const state = window.__INITIAL_STATE__;
const store = new RootStore(state);

// Running locally, we should run on a <ConnectedRouter /> rather than on a <StaticRouter /> like on the server
// Let's also let React Frontload explicitly know we're not rendering on the server here
const Application = (
  <Provider store={store}>
    <Router>
      <Frontload noServerRender={true}>
        <App />
      </Frontload>
    </Router>
  </Provider>
);

const root = document.querySelector('#root');

if (root.hasChildNodes() === true) {
  // If it's an SSR, we use hydrate to get fast page loads by just
  // attaching event listeners after the initial render
  Loadable.preloadReady().then(() => {
    hydrate(Application, root);
  });
} else {
  // If we're not running on the server, just render like normal
  render(Application, root);
}
