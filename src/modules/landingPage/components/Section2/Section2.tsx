import React from 'react';
import styles from '../../landingPage.module.scss';

import { motion } from "framer-motion";

import { ReactComponent as WordpressIcon1 } from "../../../../assets/wordpress1.svg";
import {ReactComponent as Humando} from "@assets/humanoo.svg";
import {ReactComponent as Expatrio} from "@assets/expatrio.svg";
import {ReactComponent as Maiwald} from "@assets/maiwald.svg";
import {ReactComponent as DiningRoom} from "@assets/dining-room.svg";
import {ReactComponent as Pecunia} from "@assets/pecunia.svg";
import {ReactComponent as Betonga} from "@assets/betonga.svg";

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
          <button>Let's Talk</button>
        </div>

        <div className={styles.right}>
          <motion.div
            variants={{
              initial: {
                x: 30,
              },
              animate: {
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8
                }
              }
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ fallback: true }}
            className={styles.wordpressBox}>
            <div style={{width: '200px'}}>
              <WordpressIcon1 />
              <div>
                <h3>WordPress Webseiten</h3>
                <p>Wir begleiten dich bei jedem Projekt, egal ob Website, Webshop oder Applikation. </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              initial: {
                x: 30,
              },
              animate: {
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8
                }
              }
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ fallback: true }}
            className={styles.wordpressBox}>
            <div style={{width: '200px'}}>
              <WordpressIcon1 />
              <div>
                <h3>WordPress Webseiten</h3>
                <p>Wir begleiten dich bei jedem Projekt, egal ob Website, Webshop oder Applikation. </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              initial: {
                x: 30,
              },
              animate: {
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8
                }
              }
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ fallback: true }}
            className={styles.wordpressBox}>
            <div style={{width: '200px'}}>
              <WordpressIcon1 />
              <div>
                <h3>WordPress Webseiten</h3>
                <p>Wir begleiten dich bei jedem Projekt, egal ob Website, Webshop oder Applikation. </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Section2;

