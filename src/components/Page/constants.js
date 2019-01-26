import logo from './assets/logo.png';

export const SITE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'http://localhost:3000';

export const FACEBOOK_APP_ID = 'XXXXXXXXX';

export const defaultTitle = 'React, mobx, styled-components, ssr';
export const defaultDescription =
  'Very good boilerplate';
export const defaultImage = `${SITE_URL}${logo}`;
export const defaultTwitter = '@noName';
export const defaultSep = ' | ';
