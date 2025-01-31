import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure the Navbar path is correct
import Home from './pages/Home';
import cities from "./pages/CitiesData"; // Import cities data
import Destinations from './pages/Destinations';
import Contact from './pages/Contact';
import CityDetails from './pages/CityDetails'; // Import CityDetails for individual city pages
import Alert from './pages/Alert';

const App = () => {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        {/* Navbar Component */}
        <Navbar />

        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/contact" element={<Contact />} />
          {/* Dynamic Route for City Details */}
          <Route
            path="/cities/:id"
            element={<CityDetails cities={cities} />} // Pass cities data to CityDetails component
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


