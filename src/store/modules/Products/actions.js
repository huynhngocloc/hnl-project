import { createAsyncThunk } from "@reduxjs/toolkit";
import { getproduct} from "./servicers";



const get = createAsyncThunk('product/get', async (values) => {
    return await getproduct()
})



export { get }