import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/img/logo.jpg" alt="Logo" />
        </div>
        <ul id="nav_links" className={navOpen ? 'open' : ''}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/faculty">Faculties</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Pay Now</Link></li>
          <li><Link to="/login">Admin</Link></li>
        </ul>
        <div onClick={toggleNav} className="main">
          {navOpen ? (
            <i className="fa fa-times" aria-hidden="true" id="close"></i>
          ) : (
            <i className="fa fa-bars" aria-hidden="true" id="open"></i>
          )}
        </div>
      </nav>
      <div className="news">
        <p>News-</p>
        <marquee behavior="" direction="">Buddha degree college is one of the top college in Gorakhpur</marquee>
      </div>
    </header>
  );
};

export default Header;
