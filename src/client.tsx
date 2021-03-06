import { After, ensureReady } from '@jaredpalmer/after';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import { initTimeTrackerBrowser } from 'utils/timeTracker';

initTimeTrackerBrowser();

ensureReady(routes).then((data) =>
  hydrate(
    <BrowserRouter>
      <After data={data} routes={routes} />
    </BrowserRouter>,
    document.getElementById('root')
  )
);
if (module.hot) {
  module.hot.accept();
}
