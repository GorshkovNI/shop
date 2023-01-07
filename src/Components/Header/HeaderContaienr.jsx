import React from 'react';
import { useSelector } from 'react-redux';
import { getAllCart } from '../../store/selector/selector';
import { sumOrder } from '../../utils/sumOrder';
import { Header } from './Header';

export const HeaderContainer = ({ onCartVisible }) => {
  const allCart = useSelector(getAllCart);
  const sumCart = sumOrder(allCart);
  console.log(allCart);

  return <Header money={sumCart} onCartVisible={onCartVisible} />;
};
