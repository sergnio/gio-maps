import { TextWithLanguage } from "@/app/types/Place";

export type GetPlaceDetailResponse = PlaceDetail;

export type PlaceDetail = {
  id: string;
  formattedAddress: string;
  location: Location;
  rating: number;
  userRatingCount: number;
  reviews: Review[];
  displayName: TextWithLanguage;
  websiteUri: string;
};

export type Location = {
  latitude: number;
  longitude: number;
};

export type Review = {
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
