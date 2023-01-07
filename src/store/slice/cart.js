import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  addedSneaker: [],
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addNewSneaker(state, action) {
      const id = action.payload.id;
      const index = state.addedSneaker.includes(id);
      index
        ? (state.addedSneaker = state.addedSneaker.filter(
            (item) => item !== id
          ))
        : (state.addedSneaker = [...state.addedSneaker, id]);
    },
  },
});

export const { addNewSneaker } = cart.actions;
export default cart.reducer;
