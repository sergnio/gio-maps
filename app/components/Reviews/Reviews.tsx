import { Review } from "@/app/types/PlaceDetail";
import PizzaStar from "@/app/components/PizzaRating/PizzaStar";
import styles from "@/app/components/Reviews/Reviews.module.css";
import { formatTimestamp } from "@/app/utils/time";
import ReadMore from "@/app/components/ReadMore/ReadMore";

interface Props {
  reviews: Review[];
}

export default ({ reviews }: Props) => (
  <>
    {reviews.length > 0 ? (
      reviews.map(
        ({
          name,
          rating,
          publishTime,
          text,
          authorAttribution: { displayName },
        }) => (
          <div
            key={`${name}-${publishTime}`}
            data-testid="review-item"
            className={styles.reviewContainer}
          >
            <p className={styles.headingContainer}>
              <span className={"bold"}>{rating}</span>/5{" "}
              <span className={styles.pizzaRating}>
                <PizzaStar filled />
              </span>
              <span className={styles.timestamp}>
                {displayName}, {formatTimestamp(publishTime)}
              </span>
            </p>
            {/*<p className={styles.reviewText}>{text.text}</p>*/}
            <ReadMore text={text.text} />
          </div>
        ),
      )
    ) : (
      <p>No reviews found!</p>
    )}
  </>
);
