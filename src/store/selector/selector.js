import { createSelector } from '@reduxjs/toolkit';
//import sneaker from "../slice/sneaker";

export const getAllSneakers = (state) => state.sneaker.sneakers;
export const getSelectedSneakers = (state) => state.sneaker.addedSneaker;
export const getAllCart = (state) => state.sneaker.cart;
export const getAllLikedSneakers = (state) => state.sneaker.likedSneakers;
export const getSearch = (state) => state.sneaker.search;

export const getOnlyLikedId = (state) =>
  state.sneaker.likedSneakers.map((item) => item.id);

export const getSumInCart = (state) =>
  state.sneaker.cart.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

export const getFilteredSneakers = createSelector(
  [getAllSneakers, getSearch],
  (sneaker, search) => {
    return filterSneaker(sneaker, search);
  }
);

const filterSneaker = (sneaker, search) => {
  return sneaker?.filter((item) => {
    if (item.describe.indexOf(search) !== -1) {
      console.log(item);
      return item;
    }
  });
};
