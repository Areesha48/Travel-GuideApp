import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        padding: "0",
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/bgimg2.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '40px',
          borderRadius: '15px',
          maxWidth: '800px',
          margin: '0 20px'
        }}
      >
        <motion.h1
          style={{
            fontSize: "3.5rem",
            marginBottom: "20px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          Welcome to Travel Guide
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            fontSize: "1.5rem",
            marginBottom: "30px",
            lineHeight: "1.6",
          }}
        >
          ✨ Discover the beauty of Pakistan! From vibrant cities to majestic mountains, 
          explore the hidden gems of this breathtaking country. 🌍
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link
            to="/destinations"
            style={{
              backgroundColor: "#1a237e",
              color: "white",
              padding: "15px 30px",
              borderRadius: "30px",
              textDecoration: "none",
              fontSize: "1.2rem",
              fontWeight: "bold",
              display: "inline-block",
              transition: "transform 0.3s, box-shadow 0.3s",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 6px 8px rgba(0,0,0,0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
            }}
          >
            Explore Destinations →
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;

// why install
// "framer-motion"//
/* React project to add smooth animations and transitions easily. It's a popular animation library that simplifies
 the process of creating animations for your components
. Here are some key reasons to install framer-motion:*/


// why install
// "react-leaflet": 
// map ki api k liye 


// "styled-components": 
// TbUniverse.io ki libery use k liye 