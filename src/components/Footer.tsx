import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

const links =
  <React.Fragment>
    <NavLink className="with-color" to="/work">Work</NavLink>
    <NavLink className="with-color" to="/thoughts">Thoughts</NavLink>
    <NavLink className="with-color" to="/about">About</NavLink>
  </React.Fragment>;

const Footer = () => {

  const [menuOpen, setMenuOpen] = React.useState(false);
  const openClass = menuOpen ? ' open' : '';

  return (
    <footer className="footer with-color-bg-alpha">
      <div className="footer__menu">
        <NavLink to="/" exact className="footer__menu__home with-color">STEHIL</NavLink>
        <div className="footer__mobile">
          <button className={`btn-nav${openClass}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span className="icon-bar top" />
            <span className="icon-bar middle" />
            <span className="icon-bar bottom" />
          </button>
        </div>
        <div className="footer__tablet">
          {links}
        </div>
        <div className={`footer__mobile__menu${openClass}`} onClick={() => setMenuOpen(!menuOpen)}>
          {links}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
