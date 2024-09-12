import React from "react";
import Card from "react-bootstrap/Card";
import "./Image.css"; // Importing styles for the Image component

// Define the Image component as a functional component
const Image = () => {
  return (
    <>
      {/* Card component to display an image with text overlay */}
      <Card className="bg-dark text-white">
        {/* Image displayed in the Card */}
        <Card.Img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Card image"
        />
        {/* Overlay for text */}
        <Card.ImgOverlay className="Wording">
          {/* Title text */}
          <Card.Title>Welcome to Our Property Family</Card.Title>
          {/* Subtitle text */}
          <Card.Text>Your Ideal Home Is Now Realistic</Card.Text>
          {/* Additional description */}
          <Card.Text>Choose from House, Flat, and more...</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default Image; // Export the Image component for use in other files
