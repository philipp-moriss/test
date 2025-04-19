import React, { PropsWithChildren } from "react";
import styles from "./main-layout.module.css";

import BackgroundImage from "../../assets/main-background.png";

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {children}
    </div>
  );
};
