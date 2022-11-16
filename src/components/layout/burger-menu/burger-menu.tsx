import React, { useState } from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

import { navbarData } from "../navbar/navbar.constants";
import { useWindowSize } from "hooks";

import styles from "./burger-menu.module.scss";

export const BurgerMenu = () => {
  const { width } = useWindowSize();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const isDesktop = width > 1024;

  const showMenu = isMenuOpen || isDesktop;

  return (
    <>
      <div className={styles.container}>
        {!isDesktop && (
          <IconButton className={styles.button} onClick={toggleMenu}>
            <MenuIcon className={styles.icon} />
          </IconButton>
        )}
      </div>
      {showMenu && (
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
