import React from "react";
import { Button, Typography } from "@mui/material";

import { aboutUsData } from "./about-us.constants";

import styles from "./about-us.module.scss";

export const AboutUsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography variant="h2">IT OUTSORCING</Typography>
        <div className={styles.buttons}>
          <Button className={styles.button}>Learn more</Button>
          <Button className={styles.touchButton}>Get in touch</Button>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <Typography variant="h2">How we do it?</Typography>
          <Typography variant="h4">We are charning thing and stuff</Typography>
        </div>
        <div className={styles.itemsWrapper}>
          {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
          {aboutUsData.map((item) => (
            <div className={styles.itemBox}>
              <div className={styles.hero}>
                <p>icon</p>
              </div>
              <div>
                <Typography variant="h3">time</Typography>
                <Typography variant="h4">content</Typography>
              </div>

              <Button className={styles.buttonItem}>check it</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
