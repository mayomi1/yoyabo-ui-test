import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../landingPage.module.scss';

import Button from "@commons/Button";
import Stone from "@commons/Stone";

import {section1Fadein,yoyabaMainImg, yoyabaMainImgWrapper, stoneWrapper } from "@animation/variants";

import yoyabaImg from '@assets/section1Right.png';
import stone1 from "@assets/stone1.png";
import stone2 from "@assets/stone2.png"
import stone3 from "@assets/stone3.png"

const Section1 = () => {
  return (
    <section className={styles.section1}>
      <div className={styles.wrapper}>
        <motion.div
          variants={section1Fadein}
          initial="initial"
          whileInView="animate"
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
          <motion.img src={yoyabaImg} variants={yoyabaMainImg} />
        </motion.div>
      </div>
    </section>
  )
}

export default Section1;
