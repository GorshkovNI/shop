import React from 'react';

import { Header } from './Header';

export const HeaderContainer = ({ onCartVisible }) => {
  return <Header money={() => {}} onCartVisible={onCartVisible} />;
};
