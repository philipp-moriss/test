import React from "react";
import ZeusImage from "../../../assets/zeus.png";
import styles from "./zeus.module.css";

interface ZeusProps {
  disableShake?: boolean;
}

export const Zeus: React.FC<ZeusProps> = ({ disableShake = false }) => {
  return (
    <div className={`${styles.zeus_container} ${!disableShake ? styles.shakable : ''}`}>
      <img className={styles.zeus} src={ZeusImage} alt="Zeus" />
    </div>
  );
};