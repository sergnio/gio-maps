type CustomHeader = { [key: string]: string };
const fetchWrapper = async <T>(
  method: string,
  url: string,
  payload?: Object,
  customHeaders?: CustomHeader, // Add custom headers parameter
): Promise<T> => {
  // if this were a ~truly~ generic function, we'd want to pass in the api key instead, or have it be a config option of some sort
  const googlePlacesApiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!googlePlacesApiKey) {
    throw new Error(
      "No googlePlacesApiKey was provided! Cannot run any fetch requests.",
    );
  }

  const defaultHeaders = {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": `${googlePlacesApiKey}`,
  };
  const options: RequestInit = {
    method,
    // revalidate every at most every hour
    next: { revalidate: 3600 },
    headers: {
      ...defaultHeaders,
      ...customHeaders,
    },
    ...(payload && { body: JSON.stringify(payload) }),
  };

  console.log("options: ", options);

  try {
    const response = await fetch(url, options);
    return response.json();
  } catch (e) {
    console.error("error!");
    console.error(e);
    throw new Error(JSON.stringify(e));
  }
};
interface FetchDataProps {
  url: string;
  payload?: Object;
  customHeaders?: CustomHeader;
}
export const fetchData = <T>({
  url,
  payload,
  customHeaders,
}: FetchDataProps): Promise<T> =>
  fetchWrapper("GET", url, payload, customHeaders);
export const postData = <T>(
  url: string,
  payload: Object,
  customHeaders?: CustomHeader,
): Promise<T> => fetchWrapper("POST", url, payload, customHeaders);
export const putData = <T>(
  url: string,
  payload: Object,
  customHeaders?: CustomHeader,
): Promise<T> => fetchWrapper("PUT", url, payload, customHeaders);
export const deleteData = <T>(
  url: string,
  payload: Object = {},
  customHeaders?: CustomHeader,
): Promise<T> => fetchWrapper("DELETE", url, payload, customHeaders);
