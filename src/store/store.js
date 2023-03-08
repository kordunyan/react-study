import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./features/UserStore";

export const appStore = configureStore({
    reducer: {
        userStore: userReducer
    }
});
