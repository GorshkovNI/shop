import React from 'react';
import { CardInCart } from '../../../Components/CardInCart/CardInCart';
import styles from './CartBody.module.css';
import cn from 'classnames';
import { Icon } from '../../../Components/Icons/Icon';
import { Button } from '../../../Components/Button/Button';

export const CartBody = ({ className, cart, removeCard, closeCart }) => {
  if (cart.length !== 0) {
    return (
      <div className={cn(styles._, className)}>
        {cart.map((item, index) => {
          return (
            <CardInCart
              key={index}
              id={item.id}
              describe={item.describe}
              price={item.price}
              photo={item.photo}
              removeCard={removeCard}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className={styles.iconWrapper}>
        <Icon name='box' />
        <span className={styles.text1}>Корзина пуста</span>
        <span className={styles.text2}>
          Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ
        </span>
        <Button vector='left' className={styles.return} onClick={closeCart}>
          Вернуться назад
        </Button>
      </div>
    );
  }
};
