"use client";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  height: "500px",
};

// Center coordinates for India
const indiaCenter = {
  lat: 22.5937,
  lng: 78.9629,
};

// Example: Generate random markers within India's lat/lng bounds
function getRandomMarkers(count: number) {
  const markers = [];
  const latMin = 8.4;
  const latMax = 37.6;
  const lngMin = 68.7;
  const lngMax = 97.25;

  for (let i = 0; i < count; i++) {
    const lat = Math.random() * (latMax - latMin) + latMin;
    const lng = Math.random() * (lngMax - lngMin) + lngMin;
    markers.push({ lat, lng });
  }

  return markers;
}

function DetailedUserJourneyMap() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = React.useState(null);
  const [markers] = React.useState(() => getRandomMarkers(15)); // 15 random dots

  const onLoad = React.useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={indiaCenter}
      zoom={4.5} // Zoom out to fit most of India
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {markers.map((pos, index) => (
        <Marker
          key={index}
          position={pos}
          icon={{
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 5,
            fillColor: "red",
            fillOpacity: 1,
            strokeWeight: 0,
          }}
        />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(DetailedUserJourneyMap);
