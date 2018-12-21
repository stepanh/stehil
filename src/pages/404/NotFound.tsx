import React from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';

const NotFound: AfterFC = () => 
  <div className="default-section">
    <Header />
    <h1>404 Not Found</h1>
    <p>Page not found</p>
    <Footer />
  </div>;

NotFound.getInitialProps = async (ctx: any) => {
  if (ctx.res) {
    ctx.res.statusCode = 404;
  }
};

export default NotFound;
