import { configureStore } from "@reduxjs/toolkit";
import userslice from "../features/userslice.js";
export const store=configureStore({
    reducer:{
        user:userslice,
    }
    
});