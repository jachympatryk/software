import React from "react";
import { Typography } from "@mui/material";

import { featuresData } from "./features.constants";
import { FeatureBox } from "./feature-box/feature-box";

import styles from "./features.module.scss";

export const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.features}>
        {featuresData.map((item) => (
          <FeatureBox item={item} />
        ))}
      </div>
      <div className={styles.content}>
        <Typography variant="h2">Features</Typography>
        <Typography variant="h4">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </Typography>
      </div>
    </div>
  );
};
