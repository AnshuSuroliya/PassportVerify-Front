import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../reducers/Auth";
import verifyReducer from "../reducers/Verify";

export const Store=configureStore({
    reducer:{
        register:registerReducer,
        verify:verifyReducer
    }
})