import Link from "next/link";
import styles from "@/app/page.module.css";
import { DETAILS_PAGE_ROUTE } from "@/app/clientRoutes";
import { getPlaces } from "@/app/lib/getPlaces";
import Image from "next/image";
import PizzaBanner from "public/static/images/pizza.webp";

export default async function Home() {
  const places = await getPlaces();
  return (
    <>
      {places.length > 0 ? (
        <ul>
          {places.map(({ id, displayName: { text } }, index) => (
            <Link key={`${id}`} href={DETAILS_PAGE_ROUTE(id)}>
              <li
                className={styles.listItem}
                aria-label={`See details for ${text}`}
              >
                {text}
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <p>No places found!</p>
      )}
    </>
  );
}
