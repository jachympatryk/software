import React from "react";
import { Typography } from "@mui/material";

import { FeaturesBoxProps } from "./features-box.types";

import styles from "./feature-box.module.scss";

export const FeatureBox: React.FC<FeaturesBoxProps> = ({ item }) => {
  const { value, label, icon } = item;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={icon} alt="icon" />
        <Typography variant="h4">{value}</Typography>
        <Typography variant="h4">{label}</Typography>
      </div>
      <div className={styles.background} />
    </div>
  );
};
