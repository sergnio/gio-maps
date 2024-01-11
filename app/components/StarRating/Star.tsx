import styles from "./StarRating.module.css";

interface Props {
  filled: boolean;
}
// I personally like anonymous functions when the component is small and the file is named after the component!
// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default ({ filled }: Props) => {
  return (
    <>
      {filled ? (
        <span className={styles.fullStar}>★</span>
      ) : (
        <span className={styles.emptyStar}>☆</span>
      )}
    </>
  );
};
