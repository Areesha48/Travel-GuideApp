import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        padding: "50px 20px",
        backgroundImage: 'url("/images/bgimg2.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundrepeat: "no-repeat",
        color: "#fff",
        height: "100vh",
      }}
    >
      {/* Heading Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "2.5rem", marginBottom: "10px", fontWeight: "bold" }}
      >
        Welcome to Travel Guide
      </motion.h1>

      {/* Subheading Animation */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        style={{ fontSize: "1.3rem", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}
      >
        ✨ Discover the beauty of Pakistan! From the vibrant cities to the majestic mountains, explore the hidden gems of this breathtaking country. 🌍
      </motion.p>


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