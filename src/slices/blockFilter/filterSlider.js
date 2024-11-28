import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        title: "Только скидки",
        checked: localStorage.getItem('filter_1') === 'true'
    },
    {
        title: "Новинки",
        checked: localStorage.getItem('filter_2') === 'true'
    },
    {
        title: "Хит продаж",
        checked: localStorage.getItem('filter_3') === 'true'
    },
];

export const filterSlider = createSlice({
    name: 'filterSlider',
    initialState,
    reducers: {
        toggleFilter(state, {payload}) {
            state.filter((item) => item.title === payload.title ? item.checked = !item.checked : null)
        }
    }
})

export const { toggleFilter } = filterSlider.actions;

export default filterSlider.reducer