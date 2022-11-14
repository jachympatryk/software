import React from "react";

import { Hero } from "./hero/hero";
import { WhoWeAre } from "./who-we-are/who-we-are";
import { Features } from "./features/features";
import { Services } from "./services/services";

import styles from "./landing.module.scss";

export const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <div className={styles.content}>
        <WhoWeAre />
        <Features />
        <Services />
      </div>
    </div>
  );
};
