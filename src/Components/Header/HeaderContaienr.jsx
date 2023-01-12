import React from 'react';
import { useSelector } from 'react-redux';
import { getAllCart, getAllSneakers } from '../../store/selector/selector';

import { Header } from './Header';

export const HeaderContainer = ({ onCartVisible }) => {
  const a = useSelector(getAllSneakers);
  const b = useSelector(getAllCart);
  console.log(a, b);
  console.log(a.filter((item) => item.id === b[0]));
  return <Header money={() => {}} onCartVisible={onCartVisible} />;
};
