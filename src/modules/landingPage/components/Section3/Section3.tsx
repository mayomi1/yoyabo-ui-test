import React from 'react';
import section3Image from '@assets/section3Image.png'
import styles from '../../landingPage.module.scss';
import { motion } from 'framer-motion';

const Section3 = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 300 }}
      whileInView={{
        opacity: 1,
        y: 50,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8
        }
      }}
      viewport={{ fallback: true }}
      className={styles.section3}>
      <img src={section3Image} className={styles.section3Image}  />
    </motion.section>
  )
}

export default Section3;
