// eslint-disable-next-line react/display-name
import { getPlaces } from "@/app/api/places/route";

export default async function HomePage() {
  const places: any = await getPlaces();

  return (
    <>
      <h1>Home</h1>
      {/*@ts-ignore*/}
      {places.map((place) => (
        <div key={place.id}>{JSON.stringify(place)}</div>
      ))}
    </>
  );
}

/*
  component
  updates the list of things, I add Thing100 to it

 */
