import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

export default function MapsCard({ latitude, longitude }) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const mapStyles = {
    height: "300px",
    width: "100%",
    borderRadius: 10,
  };

  const defaultCenter = {
    lat: latitude,
    lng: longitude,
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  return isLoaded ? (
    <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter} />
  ) : (
    <div>Loading Maps...</div>
  );
}
