import React from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
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
          zoom={10}
          style={styles.map}
        >
          {/* OpenStreetMap Tiles */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* Marker for the city */}
          <Marker position={[city.coordinates.lat, city.coordinates.lng]}>
            <Popup>{city.name}</Popup>
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
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
  },
  title: {
    color: "#007bff",
    marginBottom: "10px",
    fontSize: "32px",
  },
  image: {
    width: "100%",
    maxWidth: "600px",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    marginBottom: "15px",
  },
  description: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  mapContainer: {
    width: "100%",
    margin: "20px auto",
  },
  map: {
    width: "100%",
    height: "400px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  subtitle: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
  },
};

export default CityDetails;




