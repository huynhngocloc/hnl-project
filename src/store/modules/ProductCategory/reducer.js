import { createReducer } from "@reduxjs/toolkit";
import * as actions from './actions'

const reducer = createReducer({
    item: {},
    data:[],
},(builder)=>{
    builder
    .addCase(actions.getByCategory.fulfilled,(state, action)=>{
        state.data = action.payload
    })
    

})



export  default reducer