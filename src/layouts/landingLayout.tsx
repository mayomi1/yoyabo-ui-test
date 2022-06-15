import React from 'react';
import Header from '../common/Header';
import styles from './layout.module.scss';

const Landing: React.FC<{}> = ({children}) => {
  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.landingContainer}>
        <Header />
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Landing;
