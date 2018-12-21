import React from 'react';
import { Link, Route, RouteComponentProps } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Home from 'pages/Home/Home';
import Work from 'pages/Work/Work';
import Thoughts from 'pages/Thoughts/Thoughts';
import About from 'pages/About/About';
import './Main.scss';

const colors = [
  '#fcd116', // yellow
  '#ffffff',
  '#64aaff', // blue
  '#00cdc2', // torquoise
  '#ff6f6f', // red-pink
];

interface Props extends RouteComponentProps<any, any> {
  rand: number;
  error?: Error;
}

const Main: AfterFC<Props> = (props) => {
  const { match, rand } = props;

  // single source of primaryColor
  const primaryColor = colors[Math.floor(colors.length * rand)];
  const primaryColorAlpha = primaryColor + 'cc';
  const primaryColorAlpha1 = primaryColor + 'dd';
  const colorClasses =
`.with-color {
  color: ${primaryColor};
}
.with-color-bg {
  background-color: ${primaryColor};
}
.with-color-bg-alpha {
  background-image: linear-gradient(transparent, ${primaryColorAlpha1} 25%);
}
.footer__mobile__menu a.active {
  color: ${primaryColorAlpha};
`;

  return (
    <div className="main with-color-bg" style={{minHeight: '100vh'}}>
      <style>{colorClasses}</style>
      <Header />
      <Route path={`/`} exact render={rProps => <Home rand={rand} {...rProps} />} />
      <Route path={`/work`} component={Work} />
      <Route path={`/thoughts`} component={Thoughts} />
      <Route path={`/about`} component={About} />
      <Footer />
    </div>
  );
};

Main.getInitialProps = async (ctx) => {
  const rand = Math.random(); // random seed, initially same on server & client
  return {rand};
};

export default Main;
