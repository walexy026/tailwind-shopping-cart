import { configureStore } from "@reduxjs/toolkit";
import CheckOutReducer from './Slice/CheckoutSlice'

export const Store = configureStore({
    reducer:{
        checkout: CheckOutReducer
    }
})