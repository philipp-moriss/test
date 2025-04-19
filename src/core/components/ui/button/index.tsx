import React, { ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customClassName?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  customClassName = "",
  ...props
}) => {
  return (
    <button {...props} className={`${styles.button} ${customClassName}`}>
      {children}
    </button>
  );
};
