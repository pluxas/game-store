import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: localStorage.getItem('range') || 500
}

export const filterRange = createSlice({
    name: 'filterRange',
    initialState,
    reducers: {
        setRange(state, { payload }) {
            state.item = payload
        }
    }
})

export const { setRange} = filterRange.actions

export default filterRange.reducer