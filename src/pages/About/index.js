import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__top}>
        <h2>ABOUT US</h2>
      </div>
      <div className={styles.main__content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, provident?
      </div>
    </div>
  );
};

export default About;
