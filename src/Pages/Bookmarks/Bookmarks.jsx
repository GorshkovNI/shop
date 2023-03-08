import React from 'react';
import { useSelector } from 'react-redux';
import { getAllLikedSneakers } from '../../store/selector/selector';
import styles from './Bookmarks.module.css';
import { Icon } from '../../Components/Icons/Icon';
import { CardContainer } from '../../Components/Card/CardContainer';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../Components/Button/Button';

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
        <h1>Мои закладки</h1>
      </div>
      {likedSneaker.length !== 0 ? (
        <div className={styles.cards}>
          <CardContainer data={likedSneaker} />
        </div>
      ) : (
        <div className={styles.bookmarks}>
          <div className={styles.bookmarksArea}>
            <Icon name='sadSmile' className={styles.sadSmile} />
            <span className={styles.text1}>Закладок нет :(</span>
            <span className={styles.text2}>
              Вы ничего не добавляли в закладки
            </span>
            <Button vector='left' size='middle'>
              Вернуться назад
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
