import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchLatestProduct } from "./servicers";


const fetchDatalaterProduct = createAsyncThunk('latestProduct/fetchDatalaterProduct', async()=>{
    return await fetchLatestProduct()
})

export {fetchDatalaterProduct}