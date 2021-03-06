import React, { useState } from 'react';
import styles from './Poses.module.scss';
import { poses, defaultPose } from '../../state/poses';
import { randomize } from '../../utilities';

const Poses = () => {
  const [chosenPose, setChosenPose] = useState(defaultPose);

  const randomizePose = () => {
    setChosenPose(randomize(poses));
  };

  return (
    <div>
      <h1 className={styles.header}>Выбери лучшую позу</h1>
      <div className={styles.poseContainer}>
        <img src={chosenPose.src} alt="pose" />
      </div>
      <div onClick={randomizePose} className={styles.buttonContainer}>
        <img
          src="https://res.cloudinary.com/dygwe02oe/image/upload/v1594409197/N30QdlVHvViVE3z2xakUpNN4pAXi7kef8XXBy_gbBB4awzet5xy02jC_bqM2m3_jrlY_vykl8j.png"
          alt="start"
        />
      </div>
    </div>
  );
};

export default Poses;
