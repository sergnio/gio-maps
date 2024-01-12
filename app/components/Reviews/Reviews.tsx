import { Review } from "@/app/types/PlaceDetail";
import PizzaStar from "@/app/components/PizzaRating/PizzaStar";
import styles from "@/app/components/Reviews/Reviews.module.css";
import { formatTimestamp } from "@/app/utils/time";

interface Props {
  reviews: Review[];
}

export default ({ reviews }: Props) => (
  <>
    {reviews.map(({ name, rating, publishTime, originalText, text }) => (
      <div key={`${name}-${publishTime}`} className={styles.reviewContainer}>
        <p className={styles.headingContainer}>
          {/*  todo - for each star, have that many pizzas*/}
          <span className={"bold"}>{rating}</span>/5{" "}
          <span className={styles.pizzaRating}>
            <PizzaStar filled />
          </span>
          <span className={styles.timestamp}>
            {formatTimestamp(publishTime)}
          </span>
        </p>
        <p>{text.text}</p>
      </div>
    ))}
  </>
);
