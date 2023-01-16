import { createSlice } from '@reduxjs/toolkit';
import { SNEAKERS } from '../../data/Data';
const initialState = {
  sneakers: SNEAKERS,
  addedSneaker: [],
  cart: [],
  likedSneakers: [],
};

const sneakersSlice = createSlice({
  name: 'sneaker',
  initialState,
  reducers: {
    setSneakers(state, action) {
      console.log(action.payload);
      state.sneakers.length !== 0
        ? (state.sneakers.length = 0)
        : (state.sneakers = action.payload.sneakers);
    },

    addNewSneaker(state, action) {
      const id = action.payload.id;
      const index = state.addedSneaker.includes(id);
      index
        ? (state.addedSneaker = state.addedSneaker.filter(
            (item) => item !== id
          ))
        : (state.addedSneaker = [...state.addedSneaker, id]);
    },

    cartSneaker(state, action) {
      const id = action.payload.id;
      if (state.cart.findIndex((item) => item.id === id) === -1) {
        const sneaker = state.sneakers.findIndex((item) => item.id === id);
        state.cart.push(state.sneakers[sneaker]);
        return;
      }
      state.cart = state.cart.filter((item) => item.id !== id);
    },

    likeSneakers(state, action) {
      const id = action.payload.id;
      if (state.likedSneakers.findIndex((item) => item?.id === id) === -1) {
        const sneaker = state.sneakers.findIndex((item) => item.id === id);
        state.likedSneakers.push(state.sneakers[sneaker]);
        return;
      }
      state.likedSneakers = state.likedSneakers.filter(
        (item) => item.id !== id
      );
    },
  },
});
export const { setSneakers, addNewSneaker, cartSneaker, likeSneakers } =
  sneakersSlice.actions;
export default sneakersSlice.reducer;
