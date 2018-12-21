import * as React from 'react';
import { AfterRoot, AfterData } from '@jaredpalmer/after';

// based on https://github.com/jaredpalmer/after.js/blob/v1.3.1/src/Document.tsx
export class Document extends React.Component<any, any> {
  public static async getInitialProps({ assets, data, renderPage }: any) {
    const page = await renderPage();
    return { assets, data, ...page };
  }

  public render() {
    const { helmet, assets, data } = this.props;
    // get attributes from React Helmet
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    return (
      <html {...htmlAttrs}>
        <head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          <title>Stehil</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {assets.client.css && (
            <link rel="stylesheet" href={assets.client.css} />
          )}
          <link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,600,900" rel="stylesheet" />
          <link rel="icon" type="image/png" href="/favicon-32.png" sizes="32x32"/>
          <link rel="icon" type="image/png" href="/favicon-96.png" sizes="96x96"/>
          <link rel="icon" type="image/png" href="/favicon-256.png" sizes="256x256"/>
          <link rel="apple-touch-icon" href="/favicon-167.png" sizes="167x167"/>
          <link href="/manifest.json" rel="manifest"/>
          <meta name="theme-color" content="#ffffff" />
        </head>
        <body {...bodyAttrs}>
          <AfterRoot />
          <AfterData data={data} />
          <script
            type="text/javascript"
            src={assets.client.js}
            defer
            crossOrigin="anonymous"
          />
        </body>
      </html>
    );
  }
}