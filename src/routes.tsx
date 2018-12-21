import { asyncComponent } from '@jaredpalmer/after';
import React from 'react';

import './scss/global.scss';
import NotFound from 'pages/404/NotFound';
import Main from 'pages/Main/Main';

export default [
  // normal route
  {
    component: Main,
    exact: false,
    // TODO: get After to support nested routes
    // https://github.com/reactjs/react-router-tutorial/tree/master/lessons/04-nested-routes
    path: '/(work|thoughts|about|)',
  },
  // Catch-all 404 Page
  {
    path: '/', // need to define path for getInitialProps to work
    component: NotFound,
    exact: false,
  },
];
