import React from 'react';
import { useSelector } from 'react-redux';
import { getSumInCart } from '../../store/selector/selector';
import { formatMoney } from '../../utils/formatMoney';

import { Header } from './Header';

export const HeaderContainer = ({ onCartVisible }) => {
  const sumCart = useSelector(getSumInCart);
  return <Header money={formatMoney(sumCart)} onCartVisible={onCartVisible} />;
};
