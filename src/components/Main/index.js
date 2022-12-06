import React from 'react';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__top}>
        <h2>Lorem ipsum dolor sit amet.</h2>
      </div>
      <div className={styles.main__content}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, explicabo!
      </div>
    </div>
  );
};

export default Main;
