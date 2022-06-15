import React from 'react';
import styles from '../../landingPage.module.scss';

import { ReactComponent as DesignIcon} from "../../../../assets/designIcon.svg";
import { ReactComponent as EntwicklungIcon} from "../../../../assets/entwicklungIcon.svg";
import { ReactComponent as GrowthIcon } from '../../../../assets/growthIcon.svg';

import { motion } from 'framer-motion';
import {section4DesignBox, section4Text} from "@animation/variants";

const DesignBoxItems = [
  {
    title: 'Design',
    description: 'Brading, UI & UX, Illustration und Motion Design.',
    Icon: DesignIcon
  },
  {
    title: 'Entwicklung',
    description: 'WordPress & Custom Code for perfekte Performance.',
    Icon: EntwicklungIcon
  },
  {
    title: 'Growth & Maintenance',
    description: 'Lorem Ipsum.',
    Icon: GrowthIcon
  },
]
const Section4 = () => {
  return (
    <section className={styles.section4}>
      <motion.h1
        variants={section4Text}
        initial="initial"
        whileInView="animate"
        viewport={{ fallback: true }}
      >
        Immer selbst Programmiert
        und Pixelgenau auf deine Ziele abgestimmt.
        Wir liefern den gesamten Prozess.
      </motion.h1>

      <div>
        {
          DesignBoxItems.map(({ title, description, Icon }) => (
            <motion.div
              variants={section4DesignBox}
              initial="initial"
              whileInView="animate"
              whileHover={{ scale: 1.1 }}
              viewport={{ fallback: true }}
              className={styles.designBox}>
              <div className={styles.designBoxIcon}>{<Icon />}</div>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </motion.div>
          ))
        }
      </div>
    </section>
  )
}

export default Section4;
