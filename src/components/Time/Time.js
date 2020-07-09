import React from 'react';
import styles from './Time.module.scss';

export const Time = ({ chosenTime }) => {
  let init = 0;
  if (chosenTime === 30) {
    init = '30 секунд ';
  } else if (chosenTime === 60) {
    init = '1 минута';
  }
  if (chosenTime === 90) {
    init = '1:30';
  }
  if (chosenTime === 120) {
    init = '2 минуты';
  }

  return (
    <div className={styles['time-container']}>
      <div className={styles['time-block']}>{init}</div>
    </div>
  );
};
