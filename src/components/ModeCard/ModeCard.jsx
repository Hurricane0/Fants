import React from 'react';
import styles from './ModeCard.module.scss';
import { Link } from 'react-router-dom';

const ModeCard = ({ title, src, link }) => {
  return (
    <Link to={link}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img src={src} alt="love" />
        </div>
        <span className={styles.title}>{title}</span>
      </div>
    </Link>
  );
};

export default ModeCard;
