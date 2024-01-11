import { fetchData } from "@/app/utils/EasyFetch";
import { GetPlaceDetailResponse, PlaceDetail } from "@/app/types/PlaceDetail";

/**
 *  This is a function that gets places from the Google Places API
 */
interface Props {
  placeId: string;
}

export const getPlace = async ({ placeId }: Props): Promise<PlaceDetail> => {
  try {
    return await fetchData<GetPlaceDetailResponse>({
      url: `https://places.googleapis.com/v1/places/${placeId}?language_code=en`,
      customHeaders: {
        "X-Goog-FieldMask": "id,displayName",
      },
    });
  } catch (e) {
    console.error(JSON.stringify(e));
    throw new Error("Failed to get places");
  }
};
