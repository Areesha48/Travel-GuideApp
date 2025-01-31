import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const CityMap = ({ coordinates, name }) => {
  useEffect(() => {
    // Initialize the map
    const map = L.map("map").setView(coordinates, 10);

    // Add the OpenStreetMap tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    }).addTo(map);

    // Add a marker for the city
    L.marker(coordinates).addTo(map).bindPopup(`<b>${name}</b>`).openPopup();

    return () => {
      map.remove(); // Clean up the map instance on unmount
    };
  }, [coordinates, name]);

  return (
    <div
      id="map"
      style={{
        height: "400px",
        width: "100%",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    ></div>
  );
};

export default CityMap;
