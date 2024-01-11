import Link from "next/link";
import styles from "@/app/page.module.css";
import { getPlaces } from "@/app/api/places/route";

export default async function Home() {
  const places = await getPlaces();

  console.log(places);
  return (
    <main>
      <h1>Home</h1>
      {places.map((place, index) => (
        <Link key={`${place.displayName}-${index}`} href={`${index}`}>
          <div className={styles.list}>{JSON.stringify(place)}</div>
        </Link>
      ))}
    </main>
  );
}
