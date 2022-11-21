import React from "react";
import { Typography } from "@mui/material";

import { offersData } from "./offers.constants";

import styles from "./offers.module.scss";

export const OffersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {offersData.map((offer) => (
          <div className={styles.offerBox}>
            <img src={offer.image} alt="offer" />
            <div className={styles.wrapper}>
              <Typography variant="h2">{offer.label}</Typography>
              <Typography variant="h3">{offer.title}</Typography>
              <Typography variant="h4">{offer.content}</Typography>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.process}>
        <div>
          <Typography variant="h2">process</Typography>
          <Typography>opis</Typography>
        </div>
        <div className={styles.processWrapper}>
          {offersData.map(() => (
            <div className={styles.box}>
              <div className={styles.background} />
              <div>
                <Typography>1</Typography>
                <Typography>2</Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
