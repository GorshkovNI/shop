import React from 'react';
import { Icon } from '../Icons/Icon';
import styles from './CardInCart.module.css';

export const CardInCart = ({ id, describe, price, photo, removeCard }) => {
  return (
    <div className={styles._}>
      <div className={styles.wrapper} id={id}>
        <img className={styles.photo} src={photo || '/img/1.jpg'} />
        <div className={styles.aboutSneaker}>
          <span className={styles.describe}>
            {describe || 'Мужские Кроссовки Nike Air Max 270'}
          </span>
          <span className={styles.price}>{price || '12 999 руб.'}</span>
        </div>
        <Icon onClick={ () => removeCard(id)} className={styles.icon} name='btnRemove' />
      </div>
    </div>
  );
};
