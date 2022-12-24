import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./Features/alertSlice";

export default configureStore({
    reducer: {
        alert: alertSlice.reducer
    }
})

