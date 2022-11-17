import React from "react";
import { Typography } from "@mui/material";

import { ServicesBoxProps } from "./services-box.types";

import styles from "./services-box.module.scss";

export const ServicesBox: React.FC<ServicesBoxProps> = ({ item }) => {
  const { icon, title, content } = item;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={icon} alt="s" />
        <Typography>{title}</Typography>
      </div>

      <Typography>{content}</Typography>
    </div>
  );
};
