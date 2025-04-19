import styles from "./glow.module.css";

type GlowEffectProps = {
  variant: "top" | "bottom";
}

export const GlowEffect: React.FC<GlowEffectProps> = ({variant}) => {
  return (
    <div className={`${variant === 'top' ? styles.glowEffectTop : styles.glowEffectBottom }`}>
    </div>
  );
};