export const getAllSneakers = (state) => state.sneaker.sneakers;
export const getSelectedSneakers = (state) => state.sneaker.addedSneaker;
export const getAllCart = (state) => state.sneaker.cart;
export const getAllLikedSneakers = (state) => state.sneaker.likedSneakers;
export const getOnlyLikedId = (state) =>
  state.sneaker.likedSneakers.map((item) => item.id);
export const getSumInCart = (state) =>
  state.sneaker.cart.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
