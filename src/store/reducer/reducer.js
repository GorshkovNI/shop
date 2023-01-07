import { combineReducers } from '@reduxjs/toolkit';
import sneaker from '../slice/sneaker';
import cart from '../slice/cart';

const reducer = combineReducers({
  sneaker,
  cart,
});

export default reducer;
