import React from 'react';
import { CardContainer } from '../../Components/Card/CardContainer';
import styles from './Body.module.css';
import { Search } from '../Search/Search';

export const Body = () => {
  return (
    <div className={styles.wrapper}>
      <Search />
      <div className={styles.cards}>
        <CardContainer />
      </div>
    </div>
  );
};
