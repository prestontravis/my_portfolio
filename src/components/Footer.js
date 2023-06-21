import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2023 Travis Preston.</p>
        <div className="social-icons">
          <a href="https://github.com/prestontravis">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/prestontravis">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://discordapp.com/users/trayprey#7187">
            <i className="fab fa-discord"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

