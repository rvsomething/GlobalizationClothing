import React from 'react';
import Wrapper from './styles';
import { socialLinks, footerLinks } from "../../utils/constants";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png"; // Add path to your logo image

const Footer = () => {
  return (
    <Wrapper>
      {/* Top Level Sections */}
      <div className="footer-top">
        
        {/* Logo Section */}
        <div className="footer-section logo">
          <img src={logo} alt="Globalization Clothing Logo" className="footer-logo" />
        </div>
        
        {/* About Us Section */}
        <div className="footer-section about">
          <h4>About Us</h4>
          <p>This is an upcoming e-commerce website bringing you the best in global fashion. Stay tuned for exclusive collections and a unique shopping experience!</p>
        </div>
        <div className="footer-section about">
            <h4>Contact Us</h4>
            <p>Email: <a href="mailto:globalizationclothing197@gmail.com">globalizationclothing197@gmail.com</a></p>
            <p>Phone: <a href="tel:+919667202207">+919667202207</a></p>
          </div>
        
        {/* Customer Service Section */}
        <div className="footer-section customer-service">
          <h4>Customer Service</h4>
          {footerLinks.map((link) => {
            const { url, text, id } = link;
            return (
              <div key={id}>
                {id === 4 ? <a href='mailto:globalizationclothing197@gmail.com'>{text}</a>
                  :
                  <Link to={url}>{text}</Link>
                }
              </div>
            );
          })}
        </div>

        {/* Map Section */}
        <div className="footer-section map">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18... (embed URL here)"
            width="90%"
            height="100%"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
      
      {/* Bottom Level with Social Links */}
      <div className="footer-bottom">
        <div className="footer-social">
          {socialLinks.map((link) => {
            const { url, icon, text } = link;
            return (
              <a href={url} key={text} aria-label={text}>
                {icon}
              </a>
            );
          })}
        </div>
        <p>&copy; {new Date().getFullYear()} <span>Globalization Clothing</span> - All Rights Reserved</p>
      </div>
    </Wrapper>
  );
};

export default Footer;
