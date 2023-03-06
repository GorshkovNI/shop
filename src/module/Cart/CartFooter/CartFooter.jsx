import React from 'react';
import { Button } from '../../../Components/Button/Button';
import styles from './CartFooter.module.css';
import { formatMoney } from '../../../utils/formatMoney';

export const CartFooter = ({ sumOrder }) => {
  return (
    <div className={styles._}>
      <ul className={styles.cartTotal}>
        <li>
          <span>Итого:</span>
          <div></div>
          <span>
            <b>{formatMoney(sumOrder) || 0}</b>
          </span>
        </li>
      </ul>
      <Button className={styles.button} size='big' vector='right'>
        Оформить
      </Button>
    </div>
  );
};
