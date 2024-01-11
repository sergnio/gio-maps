import { Review } from "@/app/types/PlaceDetail";
import Star from "@/app/components/PizzaRating/PizzaStar";

interface Props {
  reviews: Review[];
}

// I personally like anonymous functions when the component is small and the file is named after the component!
// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default ({ reviews }: Props) => (
  <>
    {reviews.map(({ name, rating, publishTime, originalText, text }) => (
      <div key={`${name}-${publishTime}`}>
        <p>
          {/*  todo - for each star, have that many pizzas*/}
          <span className={"bold"}>{rating}</span>/5 <Star filled />
        </p>
        <p>{publishTime}</p>
        <p>{text.text}</p>
      </div>
    ))}
  </>
);
