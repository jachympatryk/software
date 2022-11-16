import React from "react";

import { BurgerMenu } from "components";

import { ReactComponent as Logo } from "assets/icons/logo.svg";

import styles from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <header className={styles.container}>
      <Logo className={styles.logo} />
      <BurgerMenu />
    </header>
  );
};
