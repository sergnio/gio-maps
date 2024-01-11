import Link from "next/link";
import styles from "@/app/page.module.css";
import { getPlaces } from "@/app/api/places/route";
import { DETAILS_PAGE_ROUTE } from "@/app/clientRoutes";

export default async function Home() {
  const places = await getPlaces();

  console.log(places);
  return (
    <main>
      <h1>Home</h1>
      {places.map((place, index) => (
        <Link key={`${place.id}`} href={DETAILS_PAGE_ROUTE(place.id)}>
          <div className={styles.list}>{JSON.stringify(place)}</div>
        </Link>
      ))}
    </main>
  );
}
