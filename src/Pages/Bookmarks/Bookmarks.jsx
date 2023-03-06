import React from 'react';
import { useSelector } from 'react-redux';
import { getAllLikedSneakers } from '../../store/selector/selector';
import styles from './Bookmarks.module.css';
import { Icon } from '../../Components/Icons/Icon';
import { CardContainer } from '../../Components/Card/CardContainer';
import { useNavigate } from 'react-router-dom';

export const Bookmarks = () => {
  const likedSneaker = useSelector(getAllLikedSneakers);

  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Icon
          name='arrowBack'
          className={styles.arrowBack}
          onClick={() => navigate(-1)}
        />
        <h1>Мои покупки</h1>
      </div>
      <div className={styles.cards}>
        <CardContainer data={likedSneaker} />
      </div>
    </div>
  );
};
