import React, { ReactElement } from "react";
import styles from "./StarRating.module.css";
import Star from "@/app/components/StarRating/Star";

interface Props {
  rating: number;
}

// I personally like anonymous functions when the component is small and the file is named after the component!
// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
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
