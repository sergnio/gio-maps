const fetchWrapper = async <T>(
  method: string,
  url: string,
  payload?: Object,
): Promise<T> => {
  const googlePlacesApiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!googlePlacesApiKey) {
    throw new Error("No googlePlacesApiKey was provided! Cannot run quries.");
  }

  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": `${googlePlacesApiKey}`,
      "X-Goog-FieldMask": "places.displayName,places.formattedAddress",
    },
    ...(payload && { body: JSON.stringify(payload) }),
  };

  try {
    const response = await fetch(url, options);
    return response.json();
  } catch (e) {
    console.error("error!");
    console.error(e);
    throw new Error(JSON.stringify(e));
  }
};

export const fetchData = <T>(url: string, payload?: Object): Promise<T> =>
  fetchWrapper("GET", url, payload);
export const postData = <T>(url: string, payload: Object): Promise<T> =>
  fetchWrapper("POST", url, payload);
export const putData = <T>(url: string, payload: Object): Promise<T> =>
  fetchWrapper("PUT", url, payload);
export const deleteData = <T>(url: string, payload: Object = {}): Promise<T> =>
  fetchWrapper("DELETE", url, payload);
