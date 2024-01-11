"use client";

import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { Location } from "@/app/types/PlaceDetail";

// Define map container style
const containerStyle = {
  width: "400px", // Adjust the size as needed
  height: "400px",
};

interface Props {
  location: Location;
}

// I personally like anonymous functions when the component is small and the file is named after the component!
// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
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
        <p>loading...</p>
      ) : (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <MarkerF position={center} />
        </GoogleMap>
      )}
    </>
  );
};
