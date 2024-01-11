import styles from "@/app/components/PizzaRating/PizzaRating.module.css";

interface Props {
  filled: boolean;
}
// I personally like anonymous functions when the component is small and the file is named after the component!
// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default ({ filled }: Props) => (
  <span className={filled ? styles.fullPizza : styles.emptyPizza}>🍕</span>
);
