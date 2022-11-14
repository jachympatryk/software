import React from "react";
import { Button, Typography } from "@mui/material";

import heroMobileImage from "assets/images/hero-mobile.webp";

import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${heroMobileImage}` }}>
      <div className={styles.content}>
        <Typography className={styles.text}>
          We provide outsourced <br /> <span>IT Services</span>{" "}
        </Typography>
        <div className={styles.buttons}>
          <Button className={styles.button}>Learn more</Button>
          <Button className={styles.touchButton}>Get in touch</Button>
        </div>
      </div>
    </div>
  );
};
