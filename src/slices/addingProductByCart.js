import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: JSON.parse(localStorage.getItem("games")) || [],
}

export const addProduct = createSlice({
    name: 'addingProductByCart',
    initialState,
    reducers: {
        addingProduct(state, { payload }) {
            state.cart.push(payload)
        },
        removeProduct(state, { payload }) {
            state.cart = state.cart.filter((product) => product.id !== payload.id)
        }
    }
})

export const {addingProduct, removeProduct} = addProduct.actions
export default addProduct.reducer