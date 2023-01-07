import React from 'react';
import { Button } from '../../../Components/Button/Button';
import styles from './CartFooter.module.css';

export const CartFooter = () => {
  return (
    <div className={styles._}>
      <ul className={styles.cartTotal}>
        <li>
          <span>Итого:</span>
          <div></div>
          <span>
            <b>12 999 руб.</b>
          </span>
        </li>
        <li>
          <span>Налог 5%:</span>
          <div></div>
          <span>
            <b>1074 руб.</b>
          </span>
        </li>
      </ul>
      <Button className={styles.button} size='big'>
        Оформить
      </Button>
    </div>
  );
};
