import { DisplayName } from "@/app/__tests__/types/Place";

export type GetPlaceDetailResponse = PlaceDetail;

export type PlaceDetail = {
  id: string;
  displayName: DisplayName;
};
