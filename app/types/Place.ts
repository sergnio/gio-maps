export type GetPlacesListResponse = {
  places: Place[];
};

export type Place = {
  id: string;
  displayName: DisplayName;
  formattedAddress: string;
};

export type DisplayName = {
  text: string;
  languageCode: string;
};
