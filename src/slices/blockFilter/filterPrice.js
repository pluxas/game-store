import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    type: localStorage.getItem('type') || "Сначала дешевые"
};

export const filterPrice = createSlice({
    name: 'filterPrice',
    initialState,
    reducers: {
        setPrice(state, {payload}) {
            state.type = payload
        }
    }
})

export const {setPrice} = filterPrice.actions;
export default filterPrice.reducer