import React from "react";
import { Link } from "react-router-dom";

import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div>logo</div>
      <div className={styles.content}>
        <Link className={styles.link} to="/">
          Strona glowna
        </Link>
        <Link className={styles.link} to="/">
          O nas
        </Link>
        <Link className={styles.link} to="/">
          Kontakt
        </Link>
        <Link className={styles.link} to="/">
          Praca
        </Link>
      </div>
    </div>
  );
};
