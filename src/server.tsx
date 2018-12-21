import { render } from '@jaredpalmer/after';
import express, { RequestHandler, NextFunction, Request, Response } from 'express';
import { Document } from './Document';

// client routes
import routes from './routes';
import isAppEngine from 'utils/isAppEngine';

// TODO revisit this - needed?
// import assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
let assets: any;
const syncLoadAssets = () => {
    assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const server = express()
  .disable('x-powered-by');

// serve static files for development
// for production we define static files in app.yaml for speed & security
if (process.env.NODE_ENV === 'production') {
  server.use(express.static('public'));
} else {
  server.use(express.static(process.env.RAZZLE_PUBLIC_DIR!));
}

// client routes
server.get('/*', async (req: express.Request, res: express.Response) => {
  console.log('rendering ' + req.url);
  try {
    const html = await render({
      assets,
      document: Document,
      req,
      res,
      routes,
      // Anything else you add here will be made available
      // within getInitialProps(ctx)
      // e.g a redux store...
      // customThing: 'thing',
    });
    res.send(html);
  } catch (error) {
    console.log('error', error);
    res.json(error);
  }
});

export default server;
