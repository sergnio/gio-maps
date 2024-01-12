import styles from "@/app/components/PizzaRating/PizzaRating.module.css";

interface Props {
  filled: boolean;
}
export default ({ filled }: Props) => (
  <span className={filled ? styles.fullPizza : styles.emptyPizza}>🍕</span>
);
