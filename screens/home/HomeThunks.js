import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
    'products/fetchProduct',
    async () => {
        const resp = await fetch('http://svcy3.myclass.vn/api/Product')
        const json = await resp.json()
        return json.content
    }
)

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const resp = await fetch('http://svcy3.myclass.vn/api/Product/getAllCategory')
        const json = await resp.json()
        return json.content
    } 
)

export const fetchProductByCategory = createAsyncThunk(
    'products/fetchProductByCategory',
    async (category) => {
        const resp = await fetch(`http://svcy3.myclass.vn/api/Product/getProductByCategory?categoryId=${category}`)
        const json = await resp.json()
        return json.content
    }
)