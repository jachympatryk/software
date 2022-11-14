import React from "react";

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
    </div>
  );
};
