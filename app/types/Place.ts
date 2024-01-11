export type GetPlacesListResponse = {
  places: Place[];
};

export type Place = {
  id: string;
  displayName: TextWithLanguage;
  formattedAddress: string;
};

export type TextWithLanguage = {
  text: string;
  languageCode: string;
};
