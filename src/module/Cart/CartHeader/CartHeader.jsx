import React from 'react';
import styles from './CartHeader.module.css';

export const CartHeader = () => {
  return (
    <div className={styles._}>
      <h1 className={styles.title}>Корзина</h1>
    </div>
  );
};
