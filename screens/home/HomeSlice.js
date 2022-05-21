import { createSlice } from "@reduxjs/toolkit";
import { fetchProduct, fetchCategories, fetchProductByCategory } from "./HomeThunks";

const initialState = {
    isLoading: false,
    dataProduct: [],
    dataCategories: [],
    dataProductByCategory: []
}

const homeSlice = createSlice({
    name: 'homeSlice',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.isLoading = true
        }).addCase(fetchProduct.fulfilled, (state, action) => {
            state.dataProduct = action.payload
        }).addCase(fetchCategories.fulfilled, (state, action) => {
            state.dataCategories = action.payload
        })
        .addCase(fetchProductByCategory.fulfilled, (state, action) => {
            state.dataProductByCategory = action.payload
        })
    }
})

export default homeSlice.reducer

