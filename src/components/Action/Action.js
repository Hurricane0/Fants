import React from 'react';
import { Preloader } from '../Preloader';
import styles from './Action.module.scss';

export const Action = ({ chosenAction, isBoy, isLoading }) => {
  if (isLoading) {
    return (
      <div className={styles['action-place-block']}>
        <Preloader isBoy={isBoy} />
      </div>
    );
  }
  return (
    <div className={styles['action-place-block']}>
      <span>{chosenAction}</span>
    </div>
  );
};
