import React from 'react';
import styles from '../../landingPage.module.scss';

import { ReactComponent as DesignIcon} from "../../../../assets/designIcon.svg";
import { ReactComponent as EntwicklungIcon} from "../../../../assets/entwicklungIcon.svg";
import { ReactComponent as GrowthIcon } from '../../../../assets/growthIcon.svg';

const Section4 = () => {
  return (
    <section className={styles.section4}>
      <h1>
        Immer selbst Programmiert
        und Pixelgenau auf deine Ziele abgestimmt.
        Wir liefern den gesamten Prozess.
      </h1>

      <div>
        <div className={styles.designBox}>
          <div className={styles.designBoxIcon}><DesignIcon /></div>
          <div>
            <h3>Design</h3>
            <p>Brading, UI & UX, Illustration und Motion Design.</p>
          </div>
        </div>

        <div className={styles.designBox}>
          <div className={styles.designBoxIcon}><EntwicklungIcon /></div>
          <div>
            <h3>Entwicklung</h3>
            <p>WordPress & Custom Code for perfekte Performance.</p>
          </div>
        </div>

        <div className={styles.designBox}>
          <div className={styles.designBoxIcon}><GrowthIcon /></div>
          <div>
            <h3>Growth & Maintenance</h3>
            <p>Lorem Ipsum.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section4;
