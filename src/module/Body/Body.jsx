import React from 'react';
import { CardContainer } from '../../Components/Card/CardContainer';
import styles from './Body.module.css';

export const Body = () => {
  return (
    <div className={styles.wrapper}>
      <CardContainer />
    </div>
  );
};
