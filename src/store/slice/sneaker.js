import { createSlice } from "@reduxjs/toolkit";
import { SNEAKERS } from "../../data/Data";
const initialState = {
    sneakers: SNEAKERS
}

const sneakersSlice = createSlice({
    name: 'sneaker',
    initialState,
    reducers:{

    }
})

export default sneakersSlice.reducer