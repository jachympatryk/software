import React, { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import { navbarData } from "../navbar/navbar.constants";

import styles from "./burger-menu.module.scss";

export const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.container}>
        <IconButton className={styles.button} onClick={toggleMenu}>
          <MenuIcon className={styles.icon} />
        </IconButton>
      </div>
      {isMenuOpen && (
        <div className={styles.content}>
          {navbarData.map(({ path, label }) => (
            <Link className={styles.link} to={path}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
