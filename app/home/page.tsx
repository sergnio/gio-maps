import { getPlaces } from "../api/places/route";

export default async function HomePage() {
  // const places: any = await getPlaces();
  const places: string[] = ["place1", "place2", "place3"];

  return (
    <>
      <h1>Home</h1>
      {/*@ts-ignore*/}
      {places.map((place, index) => (
        <div key={`${place}-${index}`}>{JSON.stringify(place)}</div>
      ))}
    </>
  );
}
