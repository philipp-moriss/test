import React from "react";
import GoldImage from "../../../assets/gold.png";
import DimondImage from "../../../assets/dimond.png";
import EffectImage from "../../../assets/side-effect.png";
import styles from "./effects.module.css";

interface EffectProps {
  name: "gold" | "diamond" | "effect";
  animation?: "rotate" | "pulse" | "none";
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export const Effect: React.FC<EffectProps> = ({
  name,
  animation = "none",
  speed = "normal",
  className,
}) => {
  const getSrc = () => {
    switch (name) {
      case "effect":
        return EffectImage;
      case "diamond":
        return DimondImage;
      case "gold":
      default:
        return GoldImage;
    }
  };

  const getClass = () => {
    switch (name) {
      case "effect":
        return styles.effect;
      case "diamond":
        return styles.diamond;
      case "gold":
      default:
        return styles.gold;
    }
  };

  const getAnimationClass = () => {
    if (animation === "none") return "";

    return `${styles[animation]} ${styles[speed]}`;
  };

  return (
    <div className={`${styles.container} ${getClass()} ${getAnimationClass()} ${className}`}>
      <img src={getSrc()} alt={`${name} effect`} />
    </div>
  );
};
