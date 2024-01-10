import { postData } from "@/app/utils/EasyFetch";

export const getPlaces = async () => {
  try {
    return await postData<any>(
      "https://places.googleapis.com/v1/places:searchText",
      {
        textQuery: "Pizza places near Livefront, Minneapolis, Minnesota",
        language_code: "en",
      },
    );
  } catch (e) {
    console.log(JSON.stringify(e));
  }
  // get list of places
};
