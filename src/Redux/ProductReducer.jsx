

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cart: [],
};



export const productSlice = createSlice({
  name: "products/fetchProducts",
  initialState,


  reducers: {
    setProducts: (state, action) => {

      state.products = action.payload;
      return state

    },
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload]
    },
    handleAddToCart: (state, action) => {
      const cartItem = state.cart.find((item) => item.id === action.payload.id);

      if (cartItem) {
   
        const updatedCart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );

        state.cart = updatedCart;
      } else {
     
        const updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
        state.cart = updatedCart;
      }
    },

    handleRemoveItem: (state, action) => {
      const itemIdToRemove = action.payload.id;
      const updatedCart = state.cart.filter((item) => item.id !== itemIdToRemove);
      state.cart = updatedCart;
    },

    handleDecreaseQuantity: (state, action) => {
      const itemIdToDecrease = action.payload.id;
      const cartItem = state.cart.find((item) => item.id === itemIdToDecrease);

      if (cartItem && cartItem.quantity > 1) {
      
        const updatedCart = state.cart.map((item) =>
          item.id === itemIdToDecrease ? { ...item, quantity: item.quantity - 1 } : item
        );
        state.cart = updatedCart;
      } 
    },
  },
});
export const {
  setProducts,
  addProduct,
  handleAddToCart,
  handleRemoveItem,
  handleDecreaseQuantity
} = productSlice.actions;

export default productSlice.reducer;
