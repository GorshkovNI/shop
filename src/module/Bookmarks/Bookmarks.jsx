import React from 'react';
import { useSelector } from 'react-redux';
import { getAllLikedSneakers } from '../../store/selector/selector';
import styles from './Bookmarks.module.css';
import { Icon } from '../../Components/Icons/Icon';
import { CardContainer } from '../../Components/Card/CardContainer';

export const Bookmarks = () => {
  const likedSneaker = useSelector(getAllLikedSneakers);
  console.log(likedSneaker);
  return (
    <div>
      <div className={styles.header}>
        <Icon name='arrowBack' className={styles.arrowBack} />
        <h1>Мои покупки</h1>
      </div>
      <div className={styles.cards}>
        <CardContainer />
      </div>
    </div>
  );
};
