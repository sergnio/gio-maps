"use client";
import { useState } from "react";
import styles from "app/components/ReadMore/ReadMore.module.css";

interface Props {
  text: string;
}

const MAX_CHARS = 200; // Maximum characters to show before "Read More"

export default ({ text }: Props) => {
  const [expanded, setExpanded] = useState(false); // State to track expanded reviews

  const toggleReadMore = () => {
    setExpanded((prevState) => !prevState);
  };
  return (
    <>
      <p className={styles.reviewText}>
        {expanded || text.length <= MAX_CHARS
          ? text
          : `${text.substring(0, MAX_CHARS)}...`}
      </p>
      {text.length > MAX_CHARS && (
        <button
          className={styles.readMoreButton}
          onClick={() => toggleReadMore()}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </>
  );
};
