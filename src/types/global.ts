/**
 * After.js Functional Component
 */
interface AfterFC<P= {}> extends React.FunctionComponent<P> {
  getInitialProps?: (ctx: any) => {};
}

interface Window { dataLayer: any; }