import { createReducer } from "@reduxjs/toolkit";
import * as actions from './actions'

const reducer = createReducer({
    item: {},
    data:[],
},(builder)=>{
    builder.addCase(actions.add.pending,(state, action) => {
        state.error = false
    })
    .addCase(actions.add.rejected,(state, action)=>{
        state.error = true 
    })
    .addCase(actions.add.fulfilled,(state, action)=>{
        state.error = false
        state.data = [
            ...state.data,
            action.payload,
        ]
    })
    .addCase(actions.fetchData.fulfilled,(state, action)=>{
        state.data = action.payload
    })
    .addCase(actions.getById.fulfilled, (state, action) => {
        state.item = action.payload
    })

})



export  default reducer