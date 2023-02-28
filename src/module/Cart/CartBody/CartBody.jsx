import React from 'react';
import { CardInCart } from '../../../Components/CardInCart/CardInCart';
import styles from './CartBody.module.css';
import cn from 'classnames';

export const CartBody = ({ className, cart ,removeCard}) => {

  return (
    <div className={cn(styles._, className)}>
        {cart.map((item, index) => {
            return <CardInCart key={index} id={item.id} describe={item.describe} price={item.price} photo={item.photo} removeCard={removeCard} />
        })}
    </div>
  );
};
