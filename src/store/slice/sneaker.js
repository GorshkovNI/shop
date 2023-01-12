import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  sneakers: [],
  addedSneaker: [],
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
  },
});
export const { setSneakers, addNewSneaker } = sneakersSlice.actions;
export default sneakersSlice.reducer;
