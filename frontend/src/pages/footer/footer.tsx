import React from 'react';
import { FaLinkedin, FaCalendarAlt } from 'react-icons/fa';
import './footer.css';

const footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3><span style={{ color: 'green' }}>open</span>
          <span style={{ color: 'tomato' }}>Sourceify </span></h3>
         <p>"We commit to innovation, push boundaries, and pull together."</p>
        </div>
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/domain">Domain</a></li>
            <li><a href="/projects">Projects</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect with Us</h3>
          <ul className="social-icons">
            <li><a href="https://www.linkedin.com/in/mir-niyazul-haque/"><FaLinkedin /></a></li>
            <li><a href="https://calendly.com/mirniyazulhaque/mirniyazulhaque"><FaCalendarAlt /></a></li>
          </ul>
        </div>
        <div className="footer-section">
        <a href="https://docs.google.com/document/d/19KWrcbZe-hJzfPKjaRZmKmtuBsyZ1FRL/edit?usp=sharing&ouid=112888155732842307989&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="privacy-policy-link">
    Privacy Policy
  </a>
         
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} OpenSourceify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default footer;
