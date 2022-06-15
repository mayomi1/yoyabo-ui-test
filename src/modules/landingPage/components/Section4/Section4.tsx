import React from 'react';
import styles from '../../landingPage.module.scss';

import { ReactComponent as DesignIcon} from "../../../../assets/designIcon.svg";
import { ReactComponent as EntwicklungIcon} from "../../../../assets/entwicklungIcon.svg";
import { ReactComponent as GrowthIcon } from '../../../../assets/growthIcon.svg';

import { motion } from 'framer-motion';

const Section4 = () => {
  return (
    <section className={styles.section4}>
      <motion.h1
        variants={{
          initial: {
            opacity: 0,
            x: 40,
            scale: 0,
          },
          animate: {
            type: "tween",
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 2.8
          }
        }}
        initial="initial"
        whileInView="animate"
        viewport={{ fallback: true }}
      >
        Immer selbst Programmiert
        und Pixelgenau auf deine Ziele abgestimmt.
        Wir liefern den gesamten Prozess.
      </motion.h1>

      <div>
        <motion.div
          variants={{
            initial: {
              y: 30,
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
          whileHover={{ scale: 1.1 }}

          viewport={{ fallback: true }}
          className={styles.designBox}>
          <div className={styles.designBoxIcon}><DesignIcon /></div>
          <div>
            <h3>Design</h3>
            <p>Brading, UI & UX, Illustration und Motion Design.</p>
          </div>
        </motion.div>

        <motion.div
          variants={{
            initial: {
              y: 30,
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
          whileHover={{ scale: 1.1 }}

          viewport={{ fallback: true }}
          className={styles.designBox}>
          <div className={styles.designBoxIcon}><EntwicklungIcon /></div>
          <div>
            <h3>Entwicklung</h3>
            <p>WordPress & Custom Code for perfekte Performance.</p>
          </div>
        </motion.div>

        <motion.div
          variants={{
            initial: {
              y: 30,
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
          whileHover={{ scale: 1.1 }}
          viewport={{ fallback: true }}
          className={styles.designBox}>
          <div className={styles.designBoxIcon}><GrowthIcon /></div>
          <div>
            <h3>Growth & Maintenance</h3>
            <p>Lorem Ipsum.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Section4;
