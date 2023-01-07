import React from 'react';
import styles from './Cart.module.css';
import { CartBody } from './CartBody/CartBody';
import { CartFooter } from './CartFooter/CartFooter';
import { CartHeader } from './CartHeader/CartHeader';

export const Cart = ({ onCartVisible }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
        <CartHeader closeCart={onCartVisible} />
        <CartBody className={styles.cartBody} />
        <CartFooter />
      </div>
    </div>
  );
};