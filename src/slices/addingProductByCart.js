import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: JSON.parse(localStorage.getItem("games")) || [],
};

export const addProduct = createSlice({
    name: "addingProductByCart",
    initialState,
    reducers: {
        addingProduct(state, { payload }) {
            const inc = state.cart.findIndex((item) => item.id === payload.id);
            if (inc !== -1) {
                state.cart[inc].quantity++;
            } else {
                state.cart.push(payload);
            }
        },
        removeProduct(state, { payload }) {
            state.cart = state.cart.filter((game) => (game.id) !== (payload.id));
        },
        increaseQuantity(state, { payload }) {
            state.cart = state.cart.map((item) =>
                item.id === payload.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        },
        decreaseQuantity(state, { payload }) {
            state.cart = state.cart.map((item) =>
                item.id === payload.id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
        },
        clearCart(state) {
            state.cart = []
        }
    },
});

export const {
    addingProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
    clearCart
} = addProduct.actions;
export default addProduct.reducer;
