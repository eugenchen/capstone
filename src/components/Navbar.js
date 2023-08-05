import React from 'react';
import logo from '../assets/nav-logo.png'; 

const Navbar = () => {
  return (
    <nav id="main-nav">
      <div className="logo-holder">
        {<img src={logo} alt="logo" width="200" height="50" />}
      </div>
      <ul id="main-menu">
        <li className="main-menu-item"><a href="/home">Homepage</a></li>        
        <li className="main-menu-item"><a href="/about">About</a></li>
        <li className="main-menu-item"><a href="/menu">Menu</a></li>  
        <li className="main-menu-item"><a href="/reservations">Reservations</a></li> 
        <li className="main-menu-item"><a href="/orderOnline">Order online</a></li> 
        <li className="main-menu-item"><a href="/logIn">Login</a></li> 
      </ul>
    </nav>
  );
};

export default Navbar;
