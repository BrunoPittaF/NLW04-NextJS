import styles from "../styles/components/completedChallengers.module.scss";

export default function CompletedChallengers() {
  return (
    <div className={styles.completedChallengersContainer}>
      <span>Desafios completos</span>
      <span>5</span>
    </div>
  );
}
