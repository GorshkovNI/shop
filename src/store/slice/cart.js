import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  addedSneaker: [],
};

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

//export const { addNewSneaker } = cart.actions;
export default cart.reducer;
