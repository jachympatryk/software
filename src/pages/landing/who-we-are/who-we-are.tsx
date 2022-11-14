import React from "react";
import { Button, Typography } from "@mui/material";

import styles from "./who-we-are.module.scss";

export const WhoWeAre = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Typography variant="h3">Who we are</Typography>
        <Typography variant="h2">Custom IT Solutions for Your Business</Typography>
        <Typography variant="h4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.{" "}
        </Typography>
        <Typography variant="h4">
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
          galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
        </Typography>
      </div>
      <Button className={styles.button}>Learn more</Button>
    </div>
  );
};
