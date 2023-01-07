import React from 'react';
import styles from './Card.module.css';
import { Icon } from '../Icons/Icon';
import { formatMoney } from '../../utils/formatMoney';

export const Card = ({ price, describe, photo }) => {
  return (
    <div className={styles._}>
      <div className={styles.wrapper}>
        <div className={styles.infoSneaker}>
          <div className={styles.iconArea}>
            <Icon className={styles.like} name='heart' />
          </div>
          <img src={photo} className={styles.sneaker} />
          <span className={styles.name}>{describe}</span>
        </div>
        <div className={styles.costs}>
          <Icon className={styles.btnPlus} name='btnPlus' />
          <span className={styles.price}>ЦЕНА:</span>
          <span className={styles.priceLabel}>{formatMoney(price)}</span>
        </div>
      </div>
    </div>
  );
};
