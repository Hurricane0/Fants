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

const FantsGroup = ({ isBoy }) => {
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
    setChosenTime(times[Math.floor(Math.random() * times.length)]);
    setChosenPlace(places[Math.floor(Math.random() * places.length)]);
    setChosenAction(actions[Math.floor(Math.random() * actions.length)]);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div>
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
