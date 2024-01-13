import Link from "next/link";
import styles from "@/app/page.module.css";
import { DETAILS_PAGE_ROUTE } from "@/app/clientRoutes";
import { getPlaces } from "@/app/lib/getPlaces";
import BannerImage from "@/app/components/Banner/BannerImage";
import PizzaStar from "@/app/components/PizzaRating/PizzaStar";

export default async function Home() {
  const places = await getPlaces();
  return (
    <>
      <h2 className={styles.subtitle}>Pizza in proximity to Livefront!</h2>
      <div className={styles.homeContainer}>
        <div className={styles.bannerContainer}>
          <BannerImage />
        </div>
        {places.length > 0 ? (
          <ul className={styles.listContainer}>
            {places.map(
              ({ id, displayName: { text }, rating, userRatingCount }) => (
                <Link
                  key={`${id}`}
                  href={DETAILS_PAGE_ROUTE(id)}
                  className={styles.linkToDetails}
                >
                  <li
                    className={styles.listItem}
                    aria-label={`See details for ${text}`}
                  >
                    <p>{text}</p>
                    <span className={styles.subrating}>
                      {rating} <PizzaStar filled /> ({userRatingCount} reviews)
                    </span>
                  </li>
                </Link>
              ),
            )}
          </ul>
        ) : (
          <p>No places found!</p>
        )}
      </div>
    </>
  );
}
