import { postData } from "@/app/utils/EasyFetch";
import { GetPlacesListResponse, Place } from "@/app/types/Place";

/**
 *  This is a function that gets places from the Google Places API
 */
export const getPlaces = async (): Promise<Place[]> => {
  try {
    const response = await postData<GetPlacesListResponse>(
      "https://places.googleapis.com/v1/places:searchText",
      {
        textQuery: "Pizza places near Livefront, Minneapolis, Minnesota",
        language_code: "en",
      },
      {
        "X-Goog-FieldMask":
          "places.id,places.displayName,places.formattedAddress",
      },
    );
    return response.places;
  } catch (e) {
    console.log(JSON.stringify(e));
    throw new Error("Failed to get places");
  }
};
