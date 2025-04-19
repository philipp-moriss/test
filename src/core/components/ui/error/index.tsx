import React, { PropsWithChildren } from "react";
import styles from "./error.module.css";

export const ErrorText: React.FC<PropsWithChildren> = ({ children }) => {
  if (!children) {
    return null;
  }
  return <span className={styles.error}>{children}</span>;
};
