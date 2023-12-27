import { createReducer } from "@reduxjs/toolkit";
import * as actions from './actions'

const reducer = createReducer({
    data:[],
},(builder)=>{
    builder.addCase(actions.add.pending,(state, action) => {
        state.error = false
    })
    .addCase(actions.add.rejected,(state, action)=>{
        state.error = true 
    })
    .addCase(actions.add.fulfilled,(state, action)=>{
        state.data = [
            ...state.data,
            action.payload,
        ]
    })
    .addCase(actions.fetchDataUser.fulfilled,(state, action)=>{
        state.data = action.payload
    })
})

export default reducer