import React from 'react';
import Header from '../common/Header';
import styles from './layout.module.scss';

const Landing: React.FC<{}> = ({children}) => {
  return (
    <div className={styles.landingContainer}>
      <Header />

      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default Landing;
