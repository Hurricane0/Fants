import React, { useState, useEffect } from 'react';
import { Time } from '../Time/Time';
import { Action } from '../Action/Action';
import { Button } from '../Button/Button';
import {
  times,
  boyActions,
  boyPlaces,
  girlActions,
  girlPlaces,
} from '../../state/fants';
import styles from './FantsGroup.module.scss';
import { randomize } from '../../utilities';

const FantsGroup = ({ isBoy, moveTop = false }) => {
  const [chosenTime, setChosenTime] = useState(0);
  const [chosenPlace, setChosenPlace] = useState('Hot');
  const [chosenAction, setChosenAction] = useState('Hot');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [chosenAction]);

  const places = isBoy ? boyPlaces : girlPlaces;
  const actions = isBoy ? boyActions : girlActions;

  const play = () => {
    setIsLoading(true);
    setChosenTime(randomize(times));
    setChosenPlace(randomize(places));
    setChosenAction(randomize(actions));
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className={moveTop ? styles.translateTop : null}>
      <Time chosenTime={chosenTime} />
      <div className={styles['main-container']}>
        <Action
          isLoading={isLoading}
          isBoy={isBoy}
          chosenAction={chosenPlace}
        />
        <Action
          isLoading={isLoading}
          isBoy={isBoy}
          chosenAction={chosenAction}
        />
      </div>
      <Button play={play} />
    </div>
  );
};

export default FantsGroup;
