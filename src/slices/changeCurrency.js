import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currency: localStorage.getItem('currency') || '₽'
}

export const changeCurrency = createSlice({
    name: 'changeCurrency',
    initialState,
    reducers: {
        setCurrency(state, { payload }) {
            state.currency = payload
        },
    }
})

export const {setCurrency} = changeCurrency.actions
export default changeCurrency.reducer