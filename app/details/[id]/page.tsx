import StarRating from "@/app/components/StarRating/StarRating";
import { getPlace } from "@/app/lib/getPlace";
import styles from "./page.module.css";
import Reviews from "@/app/components/Reviews/Reviews";
import GoogleMapEmbed from "@/app/components/GoogleMapEmbed/GoogleMapEmbed";

interface Props {
  params: {
    id: string;
  };
}

export default async function PlaceDetail({ params: { id } }: Props) {
  const {
    rating,
    userRatingCount,
    displayName: { text },
    formattedAddress,
    reviews,
    location,
  } = await getPlace({ placeId: id });

  return (
    <>
      <h1>{text}</h1>
      <div className={styles.contentContainer}>
        <div>
          <div className={styles.ratingContainer}>
            <p className={styles.ratingText}>{rating}</p>
            <StarRating rating={rating} />
            <p className={styles.ratingCount}>({userRatingCount})</p>
          </div>
          <GoogleMapEmbed location={location} />
          <h3 aria-label={`Address: ${formattedAddress}`}>
            {formattedAddress}
          </h3>
        </div>
        <div>
          <div>
            <h2>Reviews</h2>
            <div className={styles.reviewContainer}>
              <Reviews reviews={reviews} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
