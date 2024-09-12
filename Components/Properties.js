import React, { useState } from "react";

const Properties = ({ filteredProperties }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFav = (property) => {
    setFavorites([...favorites, property]);
  };

  const removefromFav = (propertyToRemove) => {
    const updatedFavorites = favorites.filter(
      (property) => property.id !== propertyToRemove.id
    );
    setFavorites(updatedFavorites);
  };

  const clearAll = () => {
    setFavorites([]);
  };

  const propertyCardStyle = {
    position: "relative",
    margin: "1rem",
    padding: "1rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    backgroundColor: "#f4f4f4",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#333",
    border: "1px solid #ddd",
    maxWidth: "300px",
  };

  const propertyImageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "1rem",
  };

  const addToFavButtonStyle = {
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#FF4141",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
  };

  const favoritesContainerStyle = {
    marginLeft: "2rem",
  };

  const favoriteItemStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    padding: "0.5rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#333",
  };

  const favoriteImageStyle = {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "4px",
    marginRight: "1rem",
  };

  return (
    <div>
      <div style={{ display: "flex", color: "black" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "70%",
            flexWrap: "wrap",
          }}
        >
          {filteredProperties.map((property) => (
            <div key={property.id} style={propertyCardStyle}>
              <img
                src={property.picture}
                alt={"property"}
                style={propertyImageStyle}
              />
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                {property.type}
              </p>
              <p style={{ fontSize: "16px", marginBottom: "4px" }}>
                Rs. {property.price} /=
              </p>
              <p style={{ fontSize: "14px", marginBottom: "4px" }}>
                Bedrooms: {property.bedrooms}
              </p>
              <p style={{ fontSize: "14px", marginBottom: "4px" }}>
                Location: {property.location}
              </p>
              <p style={{ fontSize: "14px", marginBottom: "4px" }}>
                Tenure: {property.tenure}
              </p>
              <p style={{ fontSize: "14px", marginBottom: "4px" }}>
                Added on: {property.added.day}, {property.added.month}{" "}
                {property.added.year}
              </p>
              <button
                onClick={() => addToFav(property)}
                style={addToFavButtonStyle}
              >
                Add to Favourites
              </button>
            </div>
          ))}
        </div>
        <div style={favoritesContainerStyle}>
          <h1>Favourites</h1>
          <button onClick={() => clearAll()} style={addToFavButtonStyle}>
            Clear All
          </button>
          {favorites.map((property) => (
            <div key={property.id} style={favoriteItemStyle}>
              <img
                src={property.picture}
                alt={"favorite"}
                style={favoriteImageStyle}
              />
              <div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginBottom: "8px",
                  }}
                >
                  {property.type}
                </h3>
                <p style={{ fontSize: "16px", marginBottom: "4px" }}>
                  Rs. {property.price} /=
                </p>
                <button
                  onClick={() => removefromFav(property)}
                  style={addToFavButtonStyle}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
