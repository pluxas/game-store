import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language: localStorage.getItem("language") || "Русский RU",
    type: localStorage.getItem("typeOfLanguage") || "RU",
};

export const changeLanguage = createSlice({
    name: "changeLanguage",
    initialState,
    reducers: {
        setLanguage(state, { payload }) {
            state.language = payload;
        },
        setType(state, { payload }) {
            state.type = payload;
        },
    },
});

export const {setLanguage, setType} = changeLanguage.actions
export default changeLanguage.reducer
