import React, { useState } from "react";
import { Link } from "react-router-dom";
import cities from './CitiesData';

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter cities based on search query
  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    city.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Explore Pakistani Cities</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search cities..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "20px",
          display: "block",
          margin: "0 auto 20px",
        }}
      />

      {/* City Cards */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {filteredCities.map((city) => (
          <div
            key={city.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "250px",
              transition: "transform 0.3s, box-shadow 0.3s", // Smooth transition
              borderRadius: "5px",
            }}
            className="card"
          >
            <img
              src={city.image}
              alt={city.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "5px",
                transition: "transform 0.3s", // Smooth image transition
              }}
            />
            <h3>{city.name}</h3>
            <p>{city.description}</p>
            <Link
              to={`/cities/${city.id}`}
              style={{
                textDecoration: "none",
                color: "#fff",
                background: "#007bff",
                padding: "5px 10px",
                borderRadius: "5px",
                transition: "background-color 0.3s", // Smooth button transition
              }}
              className="learn-more"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>

      {/* Inline CSS for hover effects */}
      <style>
        {`
          /* Hover effect on card */
          .card:hover {
            transform: scale(1.05); /* Slight zoom effect */
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
          }

          /* Hover effect on button */
          .learn-more:hover {
            background-color: #0056b3; /* Darken the button background on hover */
          }

          /* Hover effect on image */
          .card:hover img {
            transform: scale(1.1); /* Slight zoom effect on image */
          }
        `}
      </style>
    </div>
  );
};

export default Destinations;
