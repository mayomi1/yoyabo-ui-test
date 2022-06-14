import React from 'react';
import section3Image from '@assets/section3Image.png'
import styles from '../../landingPage.module.scss';

const Section3 = () => {
  return (
    <section className={styles.section3}>
      <img src={section3Image} className={styles.section3Image}  />


    </section>
  )
}

export default Section3;
