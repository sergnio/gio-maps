// export a default type
type GetPlacesListResponse = {
  places: Place[];
};

type Place = {
  displayName: DisplayName;
  formattedAddress: string;
};

type DisplayName = {
  text: string;
  languageCode: string;
};
