export const getPlaces = async () => {
  try {
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
          "X-Goog-Api-Key": "AIzaSyC9DF-3hUFjQUYHh2gvmPZWkQHH4UcB6pQ",
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
