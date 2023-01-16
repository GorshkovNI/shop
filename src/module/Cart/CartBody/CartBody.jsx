import React from 'react';
import { CardInCart } from '../../../Components/CardInCart/CardInCart';
import styles from './CartBody.module.css';
import cn from 'classnames';

export const CartBody = ({ className }) => {
  return (
    <div className={cn(styles._, className)}>
      <CardInCart />
      <CardInCart />
      <CardInCart />
      <CardInCart />
      <CardInCart />
      <CardInCart />
      <CardInCart />
    </div>
  );
};
