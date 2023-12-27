import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteItem, get, insert, put } from "./servicers";

const add = createAsyncThunk('newProduct/add', async(value)=>{
    return await insert(value)
})

const fetchData = createAsyncThunk('newProduct/fetch', async(value)=>{
    return await get()
})

const getById = createAsyncThunk('newProduct/getById', async (id) => {
    return await get(id)
})

const update = createAsyncThunk('newProduct/update', async (values) => {
    return await put(values)
})

const remove = createAsyncThunk('newProduct/remove', async (id) => {
    return await deleteItem(id)
})





export {add, fetchData, getById, update, remove }