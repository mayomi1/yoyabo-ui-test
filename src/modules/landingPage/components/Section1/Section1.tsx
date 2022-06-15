import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../landingPage.module.scss';
import Button from "../../../../common/Button/Button";
import right from '../../../../assets/section1Right.png';

import {yoyabaMainImg, yoyabaMainImgWrapper, stoneWrapper, fadeIn} from "@animation/variants";

import stone1 from "@assets/stone1.png";
import stone2 from "@assets/stone2.png"
import stone3 from "@assets/stone3.png"
import Stone from "@commons/Stone";

const Section1 = () => {
  return (
    <section className={styles.section1}>
      <div className={styles.wrapper}>
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className={styles.content}>
          <h1>Wir sind</h1>
          <h1>Web-Architekten</h1>
          <p>Als Web- und Softwareagentur kreieren wir WordPress Websites, Webshops & Mehr. Du hast ein Projekt? Wir machen es zur Realität.</p>
          <Button>Let's Talk</Button>
        </motion.div>

        <motion.div variants={stoneWrapper} initial="initial" animate="animate">
          <Stone animationSpeed={1.8} imageUrl={stone1} className={styles.stone1Position} stoneClassName={styles.stone1Size} />
          <Stone animationSpeed={1.6} imageUrl={stone2} className={styles.stone2Position} stoneClassName={styles.stone2Size} />
          <Stone animationSpeed={1.5} imageUrl={stone3} className={styles.stone3Position} stoneClassName={styles.stone3Size}/>
        </motion.div>

        <motion.div variants={yoyabaMainImgWrapper} initial="initial" animate="animate" className={styles.right}>
          <motion.img src={right} variants={yoyabaMainImg} />
        </motion.div>
      </div>
    </section>
  )
}

export default Section1;
