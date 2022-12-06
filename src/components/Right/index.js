import React from 'react';
import styles from './Right.module.scss';

const Right = () => {
  return (
    <div class={styles.right}>
      <div class={styles.right__title}>
        <h3>Лента новостей</h3>
      </div>
      <div class={styles.right__content}>
        <div className={styles.right__item}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, soluta necessitatibus eaque
          ea, minima, voluptas tenetur reiciendis adipisci explicabo in voluptatibus? Quod fugiat
          recusandae ut dolor illum, assumenda ea adipisci sapiente, quibusdam illo quas voluptatum
          neque saepe.
        </div>

        <div className={styles.right__item}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, soluta necessitatibus eaque
          ea, minima, voluptas tenetur reiciendis adipisci explicabo in voluptatibus? Quod fugiat
          recusandae ut dolor illum, assumenda ea adipisci sapiente, quibusdam illo quas voluptatum
          neque saepe.
        </div>
      </div>
    </div>
  );
};

export default Right;
