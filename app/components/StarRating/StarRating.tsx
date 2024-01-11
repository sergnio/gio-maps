import React from "react";
import styles from "./StarRating.module.css";

interface Props {
  rating: number;
}

// I personally like anonymous functions when the component is small and the file is named after the component!
// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default ({ rating }: Props) => {
  const totalStars = 5;
  let stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(
        <span key={i} className={styles.fullStar}>
          ★
        </span>,
      );
    } else {
      stars.push(
        <span key={i} className={styles.emptyStar}>
          ☆
        </span>,
      );
    }
  }

  return <div className={styles.starRating}>{stars}</div>;
};
