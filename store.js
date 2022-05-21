import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./screens/home/HomeSlice";


const store = configureStore({
    reducer: {
        home: HomeReducer
    }
})

export default store