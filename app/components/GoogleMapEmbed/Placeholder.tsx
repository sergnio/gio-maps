import styles from "./Placeholder.module.css";
interface Props {
  containerStyle: { width: string; height: string };
}
export default ({ containerStyle }: Props) => (
  <div className={styles.placeholder} style={containerStyle}>
    Loading map...
  </div>
);
