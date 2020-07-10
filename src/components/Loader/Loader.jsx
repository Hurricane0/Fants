import React from 'react';
import styles from './Loader.module.scss';

const Loader = ({ isLoading }) => {
  return (
    <div
      className={`${styles.wrapper} ${isLoading ? styles.seen : styles.hidden}`}
    >
      <img
        // className={isLoading ? styles.seen : styles.hidden}
        src="https://res.cloudinary.com/dygwe02oe/image/upload/v1594389100/IMG_5269_ge2h0q.jpg"
        alt="sex"
      />
    </div>
  );
};

export default Loader;
