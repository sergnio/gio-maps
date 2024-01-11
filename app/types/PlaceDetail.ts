import { DisplayName } from "@/app/types/Place";

export type GetPlaceDetailResponse = PlaceDetail;

export type PlaceDetail = {
  id: string;
  displayName: DisplayName;
};
