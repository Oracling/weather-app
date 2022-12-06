import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
const Header = () => {
  return (
    <div class={styles.header}>
      <div class={styles.header__top}>
        <Link to="/" className="logo">
          <h1>Dead Oracle</h1>
        </Link>
        <div className={styles.header__description}>This is my personal blog..</div>
      </div>
      <div class={styles.header__menu}>
        <ul className={styles.header__menu_list}>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
