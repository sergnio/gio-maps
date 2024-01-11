import StarRating from "@/app/components/StarRating/StarRating";
import { getPlace } from "@/app/lib/getPlace";
import styles from "./page.module.css";
import Reviews from "@/app/components/Reviews/Reviews";

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
          <p aria-label={`Address: ${formattedAddress}`}>
            Address: {formattedAddress}
          </p>
          <div>
            <h1>Reviews!</h1>
            <div className={styles.reviewContainer}>
              <Reviews reviews={reviews} />
            </div>
          </div>
        </div>

        <div>image container</div>
      </div>
    </>
  );
}
