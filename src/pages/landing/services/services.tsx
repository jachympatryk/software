import React, { useState } from "react";

import { servicesData } from "./services.constants";
import { ServicesBox } from "./services-box/services-box";

import { ReactComponent as Arrow } from "assets/icons/arrow.svg";
import background from "assets/images/services.webp";

import styles from "./services.module.scss";

export const Services = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if (slide === servicesData.length - 1) return setSlide(0);
    setSlide((prevState) => prevState + 1);
  };

  const prevSlide = () => {
    if (slide === 0) return setSlide(2);
    setSlide((prevState) => prevState - 1);
  };

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${background})` }}>
      <ServicesBox item={servicesData[slide]} />

      <div className={styles.buttons}>
        <Arrow onClick={prevSlide} className={styles.prev} />
        <Arrow onClick={nextSlide} className={styles.next} />
      </div>
    </div>
  );
};
