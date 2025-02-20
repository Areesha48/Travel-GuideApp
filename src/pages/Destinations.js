import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cities from './CitiesData';
import { motion } from "framer-motion";

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  // Filter cities based on search query
  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    city.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ 
        padding: "40px", 
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5"
      }}
    >
      <h2 style={{ 
        textAlign: "center", 
        marginBottom: "30px",
        fontSize: "2.5rem",
        color: "#1a237e"
      }}>
        Explore Pakistani Cities
      </h2>

      <input
        type="text"
        placeholder="Search cities..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "15px",
          fontSize: "16px",
          borderRadius: "30px",
          border: "2px solid #e0e0e0",
          marginBottom: "30px",
          display: "block",
          margin: "0 auto 30px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      />

      <motion.div 
        style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          gap: "30px", 
          justifyContent: "center" 
        }}
      >
        {filteredCities.map((city) => (
          <motion.div
            key={city.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
            style={{
              backgroundColor: "#fff",
              borderRadius: "15px",
              overflow: "hidden",
              width: "300px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={city.image}
              alt={city.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "20px" }}>
              <h3 style={{ 
                marginBottom: "10px",
                color: "#1a237e"
              }}>{city.name}</h3>
              <p style={{ 
                marginBottom: "20px",
                color: "#666"
              }}>{city.description}</p>
              <Link
                to={`/cities/${city.id}`}
                style={{
                  display: "inline-block",
                  textDecoration: "none",
                  color: "#fff",
                  background: "#1a237e",
                  padding: "10px 20px",
                  borderRadius: "25px",
                  transition: "all 0.3s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Learn More →
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style>
        {`
          .loading-spinner {
            width: 50px;
            height: 50px;
            border: 5px solid #f3f3f3;
            border-top: 5px solid #1a237e;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </motion.div>
  );
};

export default Destinations;
