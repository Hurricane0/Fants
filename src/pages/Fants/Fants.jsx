import React, { useState } from 'react';
import { Time } from '../../components/Time/Time';
import { Place } from '../../components/Place/Place';
import { Action } from '../../components/Action/Action';
import { Button } from '../../components/Button/Button';
import { ModeButton } from '../../components/ModeButton/ModeButton';
import styles from './Fants.module.scss';

const Fants = () => {
  const [times] = useState([30, 60, 90, 120]);
  const [places] = useState([
    'Губы 💋',
    'Шею',
    'Спину',
    'Грудь',
    'Живот',
    'Попу',
    'Губы',
    'Вокруг',
    'Бедра',
    'Ступни',
    'Клитор',
    'Губы',
  ]);
  const [actions] = useState([
    'Лизать',
    'Сосать',
    'Кусать',
    'Целовать',
    'Гладить',
    'Щипать',
    'Засос',
    'Вставить',
    'Смотреть',
  ]);

  const [placesTwo] = useState([
    'Губы',
    'Шею',
    'Спину',
    'Грудь',
    'Живот',
    'Попу',
    'Губы',
    'Вокруг',
    'Бедра',
    'Плечи',
    'Член',
    'Яички',
  ]);
  const [actionsTwo] = useState([
    'Лизать',
    'Сосать',
    'Кусать',
    'Целовать',
    'Гладить',
    'Щипать',
    'Засос',
    'Вставить',
    'Смотреть',
  ]);

  const [chosenTime, setChosenTime] = useState(0);
  const [chosenPlace, setChosenPlace] = useState('Hot');
  const [chosenAction, setChosenAction] = useState('Hot');

  const [chosenTimeSecond, setChosenTimeSecond] = useState(0);
  const [chosenPlaceSecond, setChosenPlaceSecond] = useState('Hot');
  const [chosenActionSecond, setChosenActionSecond] = useState('Hot');

  const playFirst = () => {
    setChosenTime(times[Math.floor(Math.random() * times.length)]);
    setChosenPlace(places[Math.floor(Math.random() * places.length)]);
    setChosenAction(actions[Math.floor(Math.random() * actions.length)]);
  };

  const playSecond = () => {
    setChosenTimeSecond(times[Math.floor(Math.random() * times.length)]);
    setChosenPlaceSecond(placesTwo[Math.floor(Math.random() * places.length)]);
    setChosenActionSecond(
      actionsTwo[Math.floor(Math.random() * actions.length)]
    );
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <Time chosenTime={chosenTime} />
        <div className={styles['main-container']}>
          <Place chosenPlace={chosenPlace} />

          <Action chosenAction={chosenAction} />
        </div>
        <Button play={playFirst} />
      </div>

      <hr />

      <div>
        <Time chosenTime={chosenTimeSecond} />
        <div className={styles['main-container']}>
          <Place chosenPlace={chosenPlaceSecond} />
          <Action chosenAction={chosenActionSecond} />
        </div>
        <Button play={playSecond} />
        <ModeButton />
      </div>
    </div>
  );
};

export default Fants;
