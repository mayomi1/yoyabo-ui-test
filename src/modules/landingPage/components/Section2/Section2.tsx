import React from 'react';
import styles from '../../landingPage.module.scss';

import { ReactComponent as WordpressIcon1 } from "../../../../assets/wordpress1.svg";

const Section2 = () => {
  return (
    <section className={styles.section2}>
      <div className={styles.left}>
        <h1>Die einzige Größe
        die zählt, ist die
          deiner Vision
        </h1>
        <p>Wir begleiten dich bei jedem Projekt, egal ob Website, Webshop oder Applikation.</p>
        <button>Let's Talk</button>
      </div>

      <div className={styles.right}>
        <div className={styles.wordpressBox}>
          <div style={{width: '200px'}}>
            <WordpressIcon1 />
            <div>
              <h3>WordPress Webseiten</h3>
              <p>Wir begleiten dich bei jedem Projekt, egal ob Website, Webshop oder Applikation. </p>
            </div>
          </div>
        </div>

        <div className={styles.wordpressBox}>
          <div style={{width: '200px'}}>
            <WordpressIcon1 />
            <div>
              <h3>WordPress Webseiten</h3>
              <p>Wir begleiten dich bei jedem Projekt, egal ob Website, Webshop oder Applikation. </p>
            </div>
          </div>
        </div>


        <div className={styles.wordpressBox}>
          <div style={{width: '200px'}}>
            <WordpressIcon1 />
            <div>
              <h3>WordPress Webseiten</h3>
              <p>Wir begleiten dich bei jedem Projekt, egal ob Website, Webshop oder Applikation. </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Section2;

