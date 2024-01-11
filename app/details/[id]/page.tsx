import StarRating from "@/app/components/StarRating/StarRating";
import { getPlace } from "@/app/lib/getPlace";
import styles from "./page.module.css";

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
  } = await getPlace({ placeId: id });

  return (
    <>
      <h1>{text}</h1>
      <div className={styles.container}>
        <div>
          <div className={styles.ratingBox}>
            <p className={styles.ratingText}>{rating}</p>
            <StarRating rating={rating} />
            <p className={styles.ratingCount}>({userRatingCount})</p>
          </div>
          <p aria-label={`Address: ${formattedAddress}`}>
            Address: {formattedAddress}
          </p>
          <div>
            <h2>reviews</h2>
            <div>review box</div>
          </div>
        </div>
        <div>image container</div>
      </div>
    </>
  );
}
