import React from 'react';
import styles from './Button.module.scss';

export const Button = ({ play }) => {
  return (
    <div className={styles['button-container']}>
      <span onClick={play} role={'img'} aria-label={''}>
        🔥
      </span>
    </div>
  );
};
