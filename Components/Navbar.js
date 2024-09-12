import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Define the functional component navbar
function navbar() {
  return (
    <>
      {/* Navbar component from react-bootstrap */}
      <Navbar bg="primary" data-bs-theme="dark">
        {/* Container component to contain the Navbar content */}
        <Container>
          {/* Logo */}
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/404/6322cf166345417.Y3JvcCwxMTkyLDkzMywxMDMsMA.jpg"
            alt="logo"
            height="40px"
            width="40px"
          />
          {/* Brand name with a link */}
          <Navbar.Brand href="/home">PROPERTIES</Navbar.Brand>
          {/* Navigation links */}
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default navbar; // Export the navbar component for use in other files
