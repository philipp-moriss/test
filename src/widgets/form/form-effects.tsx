import useWindowSize from "../../core/hook/use-window-size";
import { Effect } from "../../core/components/effects";
import styles from "./form.module.css";

export const FormEffects = () => {
  const { width } = useWindowSize();
  if (width && width >= 477) {
    return null;
  }
  return (
    <>
      <Effect name="gold" animation="pulse" className={styles.gold} />
    </>
  );
};
