import React from 'react';
import styles from './Menu.module.scss';
import ModeCard from '../../components/ModeCard/ModeCard';

const modes = [
  {
    id: 1,
    title: 'Фанты',
    src: 'https://img.icons8.com/all/500/dice.png',
    link: '/fants',
  },
  {
    id: 2,
    title: 'Квест',
    src:
      'https://images.vexels.com/media/users/3/137349/isolated/preview/7b8717630942d7fb84ae3c74b0602c0f-heart-logo-minimalism-by-vexels.png',
    link: '/quests',
  },
  {
    id: 3,
    title: 'Позы',
    src: 'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/4953.png',
    link: '/poses',
  },
];

const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardsList}>
        {modes.map(({ id, title, src, link }) => (
          <ModeCard key={id} title={title} src={src} link={link} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
