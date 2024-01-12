import React, { ReactElement } from "react";
import styles from "@/app/components/PizzaRating/PizzaRating.module.css";
import Star from "@/app/components/PizzaRating/PizzaStar";

interface Props {
  rating: number;
}

export default ({ rating }: Props) => {
  const totalStars = 5;
  let stars: ReactElement[] = [];

  for (let i = 1; i <= totalStars; i++) {
    // continue to add filled stars until we reach the rating, then have blank stars
    stars.push(<Star filled={i <= rating} />);
  }

  return (
    <div
      className={styles.starRating}
      aria-label={`Rated ${rating} out of 5 stars`}
    >
      {stars}
    </div>
  );
};
