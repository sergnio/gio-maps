import { postData } from "@/app/utils/EasyFetch";

/**
 *  This is a function that gets places from the Google Places API
 */
export const getPlaces = async (): Promise<Place[]> => {
  try {
    return await postData<Place[]>(
      "https://places.googleapis.com/v1/places:searchText",
      {
        textQuery: "Pizza places near Livefront, Minneapolis, Minnesota",
        language_code: "en",
      },
      { "X-Goog-FieldMask": "places.displayName,places.formattedAddress" },
    );
  } catch (e) {
    console.log(JSON.stringify(e));
    throw new Error("Failed to get places");
  }
};
