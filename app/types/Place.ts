export type GetPlacesListResponse = {
  places: Place[];
};

export type Place = {
  id: string;
  displayName: TextWithLanguage;
  formattedAddress: string;
  rating: number;
  userRatingCount: number;
};

export type TextWithLanguage = {
  text: string;
  languageCode: string;
};
