import React from 'react';
import styles from './Fants.module.scss';
import FantsGroup from '../../components/FantsGroup/FantsGroup';

const Fants = () => {
  return (
    <div className={styles.wrapper}>
      <FantsGroup isBoy />
      <hr />
      <FantsGroup moveTop isBoy={false} />
    </div>
  );
};

export default Fants;
