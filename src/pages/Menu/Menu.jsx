import React from 'react';
import styles from './Menu.module.scss';
import ModeCard from '../../components/ModeCard/ModeCard';
import { modes } from '../../state/menu';

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
