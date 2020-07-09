import React from 'react';
import styles from './Layout.module.scss';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {children}
      <div className={styles['back-to-menu-wrapper']}>
        <Link to={'/'}>&sim;Меню&sim;</Link>
      </div>
    </div>
  );
};

export default Layout;
