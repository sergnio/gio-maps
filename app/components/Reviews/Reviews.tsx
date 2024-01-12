import { Review } from "@/app/types/PlaceDetail";
import Star from "@/app/components/PizzaRating/PizzaStar";
import styles from "./Reviews.module.css";
import { formatTimestamp } from "@/app/utils/time";

interface Props {
  reviews: Review[];
}

export default ({ reviews }: Props) => (
  <>
    {reviews.map(({ name, rating, publishTime, originalText, text }) => (
      <div key={`${name}-${publishTime}`}>
        <p>
          {/*  todo - for each star, have that many pizzas*/}
          <span className={"bold"}>{rating}</span>/5{" "}
          <span className={styles.pizzaRating}>
            <Star filled />
          </span>
        </p>
        <p>{formatTimestamp(publishTime)}</p>
        <p>{text.text}</p>
      </div>
    ))}
  </>
);
