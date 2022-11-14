import React from "react";

import { BurgerMenu } from "components";

import styles from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <header className={styles.container}>
      <div style={{ color: "#fff" }}>Logo</div>
      <BurgerMenu />
    </header>
  );
};
