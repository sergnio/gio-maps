import { getPlaces } from "@/app/api/places/route";
export default async function HomePage() {
  const places = await getPlaces();

  // useEffect(() => {
  //   getPlaces().then((res) => console.log("res", res));
  // });
  console.log("places", places);

  return (
    <>
      <h1>Home</h1>
      {/*@ts-ignore*/}
      {/*{places.map((place, index) => (*/}
      {/*  <div key={`${place}-${index}`}>{JSON.stringify(place)}</div>*/}
      {/*))}*/}
    </>
  );
}
