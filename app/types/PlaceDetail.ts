import { TextWithLanguage } from "@/app/types/Place";

export type GetPlaceDetailResponse = PlaceDetail;

export type PlaceDetail = {
  id: string;
  formattedAddress: string;
  rating: number;
  userRatingCount: number;
  reviews: Review[];
  displayName: TextWithLanguage;
};

type Review = {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text: TextWithLanguage;
  originalText: TextWithLanguage;
  authorAttribution: AuthorAttribution;
  publishTime: string;
};

type AuthorAttribution = {
  displayName: string;
  uri: string;
  photoUri: string;
  publishTime: string;
};
