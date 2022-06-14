import React from 'react';
import styles from '../../landingPage.module.scss';
import Button from "../../../../common/Button/Button";
import right from '../../../../assets/section1Right.png';

import { ReactComponent as Humando } from "../../../../assets/humanoo.svg";
import { ReactComponent as Expatrio } from "../../../../assets/expatrio.svg";
import {ReactComponent as Maiwald } from "../../../../assets/maiwald.svg";
import {ReactComponent as DiningRoom } from "../../../../assets/dining-room.svg";
import {ReactComponent as Pecunia } from "../../../../assets/pecunia.svg";
import {ReactComponent as Betonga } from "../../../../assets/betonga.svg";

const Section1 = () => {
  return (
    <section className={styles.section1}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1>Wir sind</h1>
          <h1>Web-Architekten</h1>
          <p>Als Web- und Softwareagentur kreieren wir WordPress Websites, Webshops & Mehr. Du hast ein Projekt? Wir machen es zur Realität.</p>
          <Button>Let's Talk</Button>
        </div>

        <div className={styles.right}>
          <img src={right} />
        </div>
      </div>
      <div className={styles.partners}>
        <Humando />
        <Expatrio />
        <Maiwald />
        <DiningRoom />
        <Pecunia />
        <Betonga />
      </div>
    </section>
  )
}

export default Section1;
