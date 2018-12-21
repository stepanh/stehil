import express from 'express';
import app from './server';

if (module.hot) {
  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');
  });
  console.info('✅  Server-side HMR Enabled!');
}

// bypass webpack.DefinePlugin (@see https://github.com/jaredpalmer/razzle/issues/356)
// tslint:disable-next-line:no-var-requires
const { env } = require('process');
const port = parseInt(
  env.RAZZLE_PORT ||
    env.PORT ||
    process.env.RAZZLE_PORT ||
    process.env.PORT ||
    3000,
  10,
);
// const port = process.env.PORT || 3000;

export default express()
  .use(app)
  .listen(port, (err: Error) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`> Started on port ${port}`);
  });
