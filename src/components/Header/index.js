import React from 'react';
import logo from './logo.png';
import './header.css';

const Header = ({title}) => {
  return (
    <div className="header-title">
      <img src={logo} className="header-logo" alt="logo" />
      <h2>{title}</h2>
    </div>
  );
};

export default Header;