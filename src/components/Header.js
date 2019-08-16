import React, { Component } from 'react';
import logo from './assets/logo.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div id="menu">
        <div id="top-menu">
          <div id="name">
            <a href="/">
              <h1>ryan</h1>
              <img src={logo} className="logo" alt="logo" />
              <h1>best</h1>
            </a>
          </div>
          <div id="menu-links">
            <a href="/" className="menu-link active">work</a>
            <a href="/about" className="menu-link">about</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
