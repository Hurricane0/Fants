import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ModeButton.module.scss';

export const ModeButton = () => {
  return (
    <div className={styles['mode-button-container']}>
      <NavLink className={styles.button} to={'/quests'}>
        &sim;Режим заданий&sim;
      </NavLink>
    </div>
  );
};
