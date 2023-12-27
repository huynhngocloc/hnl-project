import { createReducer } from "@reduxjs/toolkit";
import * as actions from './actions'

const reducer = createReducer({
    data:[],
},(builder)=>{
    builder
    .addCase(actions.fetchDatalaterProduct.fulfilled,(state, action)=>{
        state.data = action.payload
    })
})

export default reducer