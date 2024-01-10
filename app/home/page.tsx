import { getPlaces } from "@/app/api/places/route";
export default async function HomePage() {
  const places = await getPlaces();

  console.log("places", JSON.stringify(places));

  return (
    <>
      <h1>Home</h1>
      {places.map((place, index) => (
        <div key={`${place}-${index}`}>{JSON.stringify(place)}</div>
      ))}
    </>
  );
}
