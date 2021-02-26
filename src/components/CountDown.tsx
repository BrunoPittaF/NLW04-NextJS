import { useContext } from "react";
import { CountdownContext } from "../contexts/CountDownContext";
import styles from "../styles/components/CountDown.module.scss";

export function CountDown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountDown,
    startCountDown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.CountDownButton}>
          Ciclo encerrado
        </button>
      ) : isActive ? (
        <button
          type="button"
          className={`${styles.CountDownButton} ${styles.CountDownButtonActive}`}
          onClick={resetCountDown}
        >
          Abandonar Ciclo
        </button>
      ) : (
        <button
          type="button"
          className={styles.CountDownButton}
          onClick={startCountDown}
        >
          Iniciar o Ciclo
        </button>
      )}
    </div>
  );
}
