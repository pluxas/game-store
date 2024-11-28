import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    input: localStorage.getItem('filterSearch') || '',
}

export const filterSearch = createSlice({
    name: 'filterSearch',
    initialState,
    reducers: {
        setInput(state, {payload}) {
            state.input = payload
        },
    }
})

export const {setInput} = filterSearch.actions
export default filterSearch.reducer