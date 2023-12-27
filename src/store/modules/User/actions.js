import { createAsyncThunk } from "@reduxjs/toolkit";
import { checkLogin, deleteItem, get, insertRegister } from "./servicers";


const add = createAsyncThunk('register/add', async(value)=>{
    return await insertRegister(value)
})

const check = createAsyncThunk('login/check', async(value)=>{
    return await checkLogin(value)
})

const fetchDataUser = createAsyncThunk('user/fetch', async()=>{
    return await get()
})

const remove = createAsyncThunk('user/remove', async (id) => {
    return await deleteItem(id)
})

export {add,check, fetchDataUser, remove}