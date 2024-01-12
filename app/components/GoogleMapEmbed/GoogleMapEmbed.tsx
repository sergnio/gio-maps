"use client";

import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { Location } from "@/app/types/PlaceDetail";
import Placeholder from "@/app/components/GoogleMapEmbed/Placeholder";

// Define map container style
const containerStyle = {
  width: "400px", // Adjust the size as needed
  height: "400px",
  margin: "1em",
};

interface Props {
  location: Location;
}

export default ({ location: { latitude, longitude } }: Props) => {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey,
  });

  const center = {
    lat: latitude,
    lng: longitude,
  };
  return (
    <>
      {!isLoaded ? (
        <Placeholder containerStyle={containerStyle} />
      ) : (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <MarkerF position={center} />
        </GoogleMap>
      )}
    </>
  );
};
