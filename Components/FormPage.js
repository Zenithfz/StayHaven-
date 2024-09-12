// Import necessary libraries and files
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import data from "./properties.json"; // Importing property data from a JSON file
import Properties from "./Properties"; // Importing a component for displaying properties
import "./FormPage.css"; // Importing styles for the FormPage component

// Define the functional component FormPage
function FormPage() {
  // Styles for input elements
  const inputStyle = {
    width: "70%",
    padding: "8px",
    margin: "5px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  };

  // Styles for labels
  const labelStyle = {
    margin: "5px 0",
    display: "block",
    fontWeight: "bold",
  };

  // State variables using the useState hook to manage filters and filtered properties
  const [filters, setFilters] = useState({
    type: "",
    priceMin: 0,
    priceMax: 100000000,
    bedroomsMin: 0,
    bedroomsMax: 10,
    postcode: "",
  });

  const [filteredProperties, setFilteredProperties] = useState(data.properties); // Set default properties to display

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Filtering properties based on the provided filter criteria
    const updatedFilteredProperties = data.properties.filter((property) => {
      return (
        property.type.toLowerCase().includes(filters.type.toLowerCase()) &&
        property.price <= parseInt(filters.priceMax) &&
        property.price >= parseInt(filters.priceMin) &&
        property.bedrooms <= parseInt(filters.bedroomsMax) &&
        property.bedrooms >= parseInt(filters.bedroomsMin) &&
        property.location.toLowerCase().includes(filters.postcode.toLowerCase())
      );
    });
    // Update filtered properties
    setFilteredProperties(updatedFilteredProperties);
  };

  // Function to handle input changes and update filters
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFilters({ ...filters, [id]: value });
  };

  // Rendering the component
  return (
    <div className="form-page-container">
      {/* Accordion component for an expandable search form */}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Advanced Search</Accordion.Header>
          <Accordion.Body>
            <div style={{ width: "70%" }}>
              <div
                style={{
                  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.3)",
                  padding: "20px",
                  margin: "10px",
                }}
              >
                {/* Form for advanced property search */}
                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  {/* Input fields for property search criteria */}
                  <div>
                    <label htmlFor="type" style={labelStyle}>
                      Type:
                    </label>
                    <input
                      type="text"
                      id="type"
                      placeholder="e.g. House, Flat,"
                      style={inputStyle}
                      value={filters.type}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Input fields for price range */}
                  <div style={{ display: "flex" }}>
                    <div>
                      <label htmlFor="priceMin" style={labelStyle}>
                        Min Price:
                      </label>
                      <input
                        type="text"
                        id="priceMin"
                        placeholder="Min Price"
                        style={inputStyle}
                        value={filters.minPrice}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="priceMax" style={labelStyle}>
                        Max Price:
                      </label>
                      <input
                        type="text"
                        id="priceMax"
                        placeholder="Max Price"
                        style={inputStyle}
                        value={filters.maxPrice}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Input fields for bedrooms range */}
                  <div style={{ display: "flex" }}>
                    <div>
                      <label htmlFor="bedroomsMin" style={labelStyle}>
                        Min Bedrooms:
                      </label>
                      <input
                        type="text"
                        id="bedroomsMin"
                        placeholder="Min Bedrooms"
                        style={inputStyle}
                        value={filters.minBedrooms}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="bedroomsMax" style={labelStyle}>
                        Max Bedrooms:
                      </label>
                      <input
                        type="text"
                        id="bedroomsMax"
                        placeholder="Max Bedrooms"
                        style={inputStyle}
                        value={filters.maxBedrooms}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Input field for postcode */}
                  <label htmlFor="postcode" style={labelStyle}>
                    Postcode:
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    placeholder="e.g. BR1, NW1"
                    style={inputStyle}
                    value={filters.postcode}
                    onChange={handleInputChange}
                  />

                  {/* Button to trigger property search */}
                  <Button
                    variant="primary"
                    type="submit"
                    style={{ width: "20%", marginTop: "10px" }}
                  >
                    Search
                  </Button>
                </form>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* Component to display filtered properties */}
      <Properties filteredProperties={filteredProperties} />
    </div>
  );
}

// Export the FormPage component to be used in other files
export default FormPage;
