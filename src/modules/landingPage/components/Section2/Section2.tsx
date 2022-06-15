import React from 'react';
import styles from '../../landingPage.module.scss';

import { motion } from "framer-motion";

import { ReactComponent as WordpressIcon1 } from "@assets/wordpress1.svg";
import { ReactComponent as WordpressIcon2 } from "@assets/wordpress2.svg";
import { ReactComponent as WordpressIcon3 } from "@assets/wordpress3.svg";

import {ReactComponent as Humando} from "@assets/humanoo.svg";
import {ReactComponent as Expatrio} from "@assets/expatrio.svg";
import {ReactComponent as Maiwald} from "@assets/maiwald.svg";
import {ReactComponent as DiningRoom} from "@assets/dining-room.svg";
import {ReactComponent as Pecunia} from "@assets/pecunia.svg";
import {ReactComponent as Betonga} from "@assets/betonga.svg";

import Button from "@commons/Button";
import {section2Wordpress} from "@animation/variants";

const WordpressTextItems = [
  {
    Icon: WordpressIcon1,
    title: 'WordPress Webseiten',
    description: 'Wir begleiten dich bei jedem Projekt, egal ob Website, Webshop oder Applikation.'
  },
  {
    Icon: WordpressIcon2,
    title: 'WordPress Webseiten',
    description: 'Wir begleiten dich bei jedem Projekt, egal ob Website, Webshop oder Applikation.'
  },
  {
    Icon: WordpressIcon3,
    title: 'WordPress Webseiten',
    description: 'Wir begleiten dich bei jedem Projekt, egal ob Website, Webshop oder Applikation.'
  }
]
const Section2 = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={styles.section2}>
      <div className={styles.partners}>
        <Humando />
        <Expatrio />
        <Maiwald />
        <DiningRoom />
        <Pecunia />
        <Betonga />
      </div>

      <div className={styles.section2Wrapper}>
        <div className={styles.left}>
          <h1>Die einzige Größe
            die zählt, ist die
            deiner Vision
          </h1>
          <p>Wir begleiten dich bei jedem Projekt, egal ob Website, Webshop oder Applikation.</p>
          <Button>Let's Talk</Button>
        </div>

        <div className={styles.right}>
          {
            WordpressTextItems.map(({title, description, Icon}, id) => (
              <motion.div
                key={id}
                variants={section2Wordpress}
                initial="initial"
                whileInView="animate"
                viewport={{ fallback: true }}
                className={styles.wordpressBox}>
                <div style={{width: '200px'}}>
                  <Icon />
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </motion.section>
  )
}
export default Section2;

