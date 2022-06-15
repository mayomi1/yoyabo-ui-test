import React from 'react';
import styles from './landingPage.module.scss';
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.group2}>
        <Section1 />
      </div>
      <div className={styles.group1}>
        <Section2 />
      </div>
      <div className={styles.group2}>
        <Section3 />
      </div>
      <div className={styles.group1}>
        <Section4 />
      </div>
      <div className={styles.group2}>
        <Section5 />
      </div>
    </div>
  )
}

export default Landing;
