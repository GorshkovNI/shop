import React from 'react';
import styles from './Cart.module.css';
import { CartBody } from './CartBody/CartBody';
import { CartFooter } from './CartFooter/CartFooter';
import { CartHeader } from './CartHeader/CartHeader';
import {useDispatch, useSelector} from "react-redux";
import {getAllCart} from "../../store/selector/selector";
import {sumOrder} from "../../utils/sumOrder";
import {addNewSneaker, cartSneaker} from "../../store/slice/sneaker";

export const Cart = ({ onCartVisible }) => {

    const cart = useSelector(getAllCart)
    const sumCart = sumOrder(cart)

    const dispath = useDispatch()

    const removeCard = (id) => {
        console.log(id)
        dispath(addNewSneaker({ id: id}));
        dispath(cartSneaker({ id: id }));
    };

  return (
    <div className={styles.overlay}>
      <div className={styles.wrapper}>
        <CartHeader closeCart={onCartVisible} />
        <CartBody removeCard={removeCard} className={styles.cartBody} cart={cart} />
        <CartFooter sumOrder={sumCart} />
      </div>
    </div>
  );
};
