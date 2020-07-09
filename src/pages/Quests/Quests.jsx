import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Quests.module.scss';

export const Quests = () => {
  const [quests] = useState([
    'Парень лежит на спине. Девушка медленно проводить грудью с ног до головы по парню, а в конце по очереди дает парню целовать два сосочка',
    'Парень полторы (две) минуты ласкает, целует ступни девушки',
    'Парень две минуты облизывает, кусает, целует попку девушки',
    'Пара подходит к зеркалу и целуется на протяжении ~1 минуты',
    'Взять девушку двумя руками за грудь, и 10 раз проникнуть языком в вагину',
    'Девушка на протяжении 30 секунд водит грудью по спине парня',
    'Девушка садится на стул и закидывает ноги на мужчину. Мужчина 2 минуты делает куни',
    'Парень лежит на спине. Девушка медленно проводить грудью с ног до головы по парню, а в конце по очереди дает парню целовать два сосочка.',
    'Парень ложится на спину. Девушка водит по лицу парня своей вагиной как захочет на протяжении 2 минут',
    'Девушка целует парня от губ до члена на протяжении 1 минуты',
    'Девушка прогибает спину и пытается полностью покласть грудь на кровать. Мужчина вводит палец или пальцы в девушку и минуту делает круговые движения внутри',
    'Девушка ложится на край кровати. Парень садится на колени перед кроватью. максимально широко раздвигает ноги девушки в шпагат и делает куни на протяжении полторы минуты',
  ]);

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
      <span
        className={styles['fire']}
        onClick={playQuest}
        role={'img'}
        aria-label={''}
      >
        🔥
      </span>
      <div>
        <span className={styles['quest-text']}>{chosenQuest}</span>
      </div>
      <NavLink className={styles['back-to-fant-button']} to={'/'}>
        &sim;Режим Фантов&sim;
      </NavLink>
    </div>
  );
};
