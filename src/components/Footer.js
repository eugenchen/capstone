import React from "react";
import footerLogo from "../assets/footer-logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-menu">
        <div className="footer-logo">
          <img
            src={footerLogo}
            alt="Little Lemon logo"
            width="100"
            height="150"
          ></img>
        </div>
        <ul id="footer-nav">
          <h1 className="footer-header">Navigation</h1>
          <li className="footer-nav-item">
            <a href="/home">Homepage</a>
          </li>
          <li className="footer-nav-item">
            <a href="/about">About</a>
          </li>
          <li className="footer-nav-item">
            <a href="/menu">Menu</a>
          </li>
          <li className="footer-nav-item">
            <a href="/reservations">Reservations</a>
          </li>
          <li className="footer-nav-item">
            <a href="/orderOnline">Order online</a>
          </li>
          <li className="footer-nav-item">
            <a href="/logIn">Login</a>
          </li>
        </ul>

        <ul id="footer-info">
          <h1 className="footer-header">Contact</h1>
          <li>2395 Maldove Way,</li>
          <li>Chicago Illinois</li>
          <br></br>
          <li>(123)-456-789</li>
          <a
            href="mailto: info@littlelemon.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            info@littlelemon.com
          </a>
        </ul>

        <ul id="footer-links">
          <h1 className="footer-header">Connect</h1>
          <li className="footer-link-item">
            <a
              href="https://www.facebook.com/thelittlelemonshop/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li className="footer-link-item">
            <a
              href="https://www.instagram.com/littlelemonmoon/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
