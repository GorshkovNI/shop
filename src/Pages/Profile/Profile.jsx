import React from 'react';
import { useSelector } from 'react-redux';
import { getAllLikedSneakers } from '../../store/selector/selector';
import styles from './Profile.module.css';
import { Icon } from '../../Components/Icons/Icon';
import { CardContainer } from '../../Components/Card/CardContainer';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../Components/Button/Button';

export const Profile = () => {
  const likedSneaker = useSelector(getAllLikedSneakers);
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      {likedSneaker.length !== 0 ? (
        <div className={styles.header}>
          <Icon
            name='arrowBack'
            className={styles.arrowBack}
            onClick={() => navigate(-1)}
          />
          <h1>Мои заказы</h1>
        </div>
      ) : (
        ''
      )}
      {likedSneaker.length !== 0 ? (
        <div className={styles.cards}>
          <CardContainer data={likedSneaker} />
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.containerArea}>
            <Icon name='unhappy' className={styles.sadSmile} />
            <span className={styles.text1}>У вас нет заказов</span>
            <span className={styles.text2}>
              Вы нищеброд?<br></br>
              Оформите хотя бы один
            </span>
            <Button vector='left' size='middle' onClick={() => navigate(-1)}>
              Вернуться назад
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
