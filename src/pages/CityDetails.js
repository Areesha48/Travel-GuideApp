import React from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const CityDetails = ({ cities }) => {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const city = cities.find((city) => city.id === parseInt(id)); // Find the city by its 'id'

  if (!city) {
    return <p style={{ textAlign: "center", fontSize: "20px", color: "red" }}>City not found!</p>;
  }

  return (
    <div style={styles.container}>
      {/* City Name */}
      <h2 style={styles.title}>{city.name}</h2>

      {/* Image Section */}
      <img
        src={city.image}
        alt={city.name}
        style={styles.image}
      />

      {/* Description */}
      <p style={styles.description}>{city.details}</p>

      {/* Map Section */}
      <div style={styles.mapContainer}>
        <h3 style={styles.subtitle}>Location on Map</h3>
        <MapContainer
          center={[city.coordinates.lat, city.coordinates.lng]}
          zoom={13}
          style={styles.map}
          scrollWheelZoom={false}
        >
          {/* OpenStreetMap Tiles */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Marker for the city */}
          <Marker position={[city.coordinates.lat, city.coordinates.lng]}>
            <Popup>
              <b>{city.name}</b>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

// CSS Styles
const styles = {
  container: {
    padding: "20px",
    maxWidth: "1000px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2.5rem",
    color: "#1a237e",
    textAlign: "center",
    marginBottom: "20px",
  },
  image: {
    width: "60%",
    height: "280px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    display: "block",
    margin: "0 auto 20px",
  },
  description: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#333",
    marginBottom: "30px",
    textAlign: "justify",
  },
  mapContainer: {
    marginTop: "20px",
  },
  subtitle: {
    fontSize: "1.8rem",
    color: "#1a237e",
    marginBottom: "15px",
  },
  map: {
    height: "400px",
    width: "100%",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
};

export default CityDetails;




