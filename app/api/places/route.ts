export const getPlaces = async () => {
  const googlePlacesApiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!googlePlacesApiKey) {
    throw new Error("No googlePlacesApiKey was provided! Cannot run quries.");
  }

  try {
    // todo - extract out fetch to a helper function that includes api key on every request
    const res = await fetch(
      "https://places.googleapis.com/v1/places:searchText",
      {
        method: "POST",
        body: JSON.stringify({
          textQuery: "pizza places near Livefront, Minneapolis, Minnesota",
          language_code: "en",
        }),
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": `${googlePlacesApiKey}`,
          "X-Goog-FieldMask": "places.displayName,places.formattedAddress",
        },
      },
    );
    return await res.json();
  } catch (e) {
    console.log(JSON.stringify(e));
  }
  // get list of places
};
