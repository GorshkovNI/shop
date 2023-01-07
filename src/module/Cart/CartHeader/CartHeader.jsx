import React from 'react';
import { Icon } from '../../../Components/Icons/Icon';
import styles from './CartHeader.module.css';

export const CartHeader = ({ closeCart }) => {
  return (
    <div className={styles._}>
      <h1 className={styles.title}>Корзина</h1>
      <Icon className={styles.icon} name='btnRemove' onClick={closeCart} />
    </div>
  );
};
