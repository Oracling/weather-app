import React from 'react';
import styles from './Header.module.scss';
const Header = () => {
  return (
    <div class={styles.header}>
      <div class={styles.header__top}>
        <a href="/" className="logo">
          <h1>Dead Oracle</h1>
        </a>
        <div className={styles.header__description}>This is my personal blog..</div>
      </div>
      <div class={styles.header__menu}>
        <ul className={styles.header__menu_list}>
          <li>
            <a href="/">Main</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
