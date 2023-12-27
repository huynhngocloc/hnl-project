import { createAsyncThunk } from "@reduxjs/toolkit";
import {  getProductCategory} from "./servicers";



const getByCategory = createAsyncThunk('newProduct/getByCategory', async (id) => {
    return await getProductCategory(id)
})



export { getByCategory }