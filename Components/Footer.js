// Import necessary libraries and files
import React from "react";
import Row from "react-bootstrap/esm/Row"; // Import Row component from react-bootstrap library
import "./Footer.css"; // Import Footer styling

// Define Footer component as a functional component
const Footer = () => {
  return (
    // Create a div with a class name 'social' to contain social media links and copyright text
    <div className="social">
      {/* Social media links */}
      <a href="https://www.facebook.com">
        <i className="fab fa-facebook"></i>
      </a>
      <a href="https://twitter.com">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.instagram.com">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com">
        <i className="fab fa-linkedin"></i>
      </a>

      {/* Row component from react-bootstrap to structure content */}
      <Row>
        {/* Copyright text */}
        <p>Copyright © Zenith Fernando</p>
      </Row>
    </div>
  );
};

// Export Footer component to be used in other files
export default Footer;
