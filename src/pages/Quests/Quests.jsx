import React, { useState } from 'react';
import styles from './Quests.module.scss';
import { quests } from '../../state/quests';

export const Quests = () => {
  const [chosenQuest, setChosenQuest] = useState('Нажми на кнопку');
  const [increment, setIncrement] = useState(0);

  const playQuest = () => {
    if (increment >= quests.length - 1) {
      setIncrement(0);
      setChosenQuest(quests[increment]);
    } else {
      setChosenQuest(quests[increment]);
      setIncrement(increment + 1);
    }
  };
  return (
    <div className={styles['quests-container']}>
      <div>
        <span className={styles['quest-text']}>{chosenQuest}</span>
      </div>
      <span
        className={styles['fire']}
        onClick={playQuest}
        role={'img'}
        aria-label={''}
      >
        🔥
      </span>
    </div>
  );
};
