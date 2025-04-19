import styles from "./promoCard.module.css";
import flameGifUrl from "../../../assets/fier.gif";
import FreeSpinCount from "../../../assets/200.png";

export const PromoCard = () => {
  return (
    <div className={styles.wrapper}>
      <img 
        className={styles.flame} 
        src={flameGifUrl} 
        alt="Анимированное пламя"
      />
      
      <div className={styles.number_wrapper}>
        <img src={FreeSpinCount} alt="200 фриспинов" />
      </div>
    </div>
  );
};