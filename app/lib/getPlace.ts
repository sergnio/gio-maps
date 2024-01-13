"use server";
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
    const detailResponse = await fetchData<GetPlaceDetailResponse>({
      url: `https://places.googleapis.com/v1/places/${placeId}?language_code=en`,
      customHeaders: {
        "X-Goog-FieldMask":
          "id,photos,displayName,location,rating,userRatingCount,formattedAddress,reviews,websiteUri",
      },
    });
    return detailResponse;
  } catch (e) {
    console.error(JSON.stringify(e));
    throw new Error("Failed to get places");
  }
};
