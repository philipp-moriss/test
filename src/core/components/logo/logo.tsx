import React from "react";
import LogoImage from "../../../assets/logo.png";
import styles from "./logo.module.css";

interface LogoProps {
  disableShake?: boolean;
  shakeIntensity?: "low" | "medium" | "high";
  shakeSpeed?: "slow" | "normal" | "fast";
}

export const Logo: React.FC<LogoProps> = ({ 
  disableShake = false,
  shakeIntensity = "medium",
  shakeSpeed = "normal"
}) => {
  return (
    <div 
      className={`${styles.logo_container} ${
        !disableShake ? styles.shakable : ""
      }`}
      data-intensity={shakeIntensity}
      data-speed={shakeSpeed}
    >
      <img className={styles.logo} src={LogoImage} alt="Company Logo" />
    </div>
  );
};