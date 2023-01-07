import React from 'react';
import styles from './Card.module.css';
import { Icon } from '../Icons/Icon';
import { formatMoney } from '../../utils/formatMoney';

export const Card = ({ id, price, describe, photo, addInCart, selected }) => {
  return (
    <div className={styles._} id={id}>
      <div className={styles.wrapper}>
        <div className={styles.infoSneaker}>
          <div className={styles.iconArea}>
            <Icon className={styles.like} name='heart' />
          </div>
          <img src={photo} className={styles.sneaker} />
          <span className={styles.name}>{describe}</span>
        </div>
        <div className={styles.costs}>
          <div onClick={addInCart} id={id}>
            <Icon
              className={styles.btnChecked}
              name={selected ? 'btnChecked' : 'btnPlus'}
            />
          </div>
          <span className={styles.price}>ЦЕНА:</span>
          <span className={styles.priceLabel}>{formatMoney(price)}</span>
        </div>
      </div>
    </div>
  );
};
