// export a default type
type GetPlacesListResponse = {
  places: Place[];
};

type Place = {
  id: string;
  displayName: DisplayName;
  formattedAddress: string;
};

type DisplayName = {
  text: string;
  languageCode: string;
};
