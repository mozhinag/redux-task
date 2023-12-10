import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../Redux/ProductReducer";

export const store = configureStore({
    reducer :{
        products : productSlice.reducer    }
})