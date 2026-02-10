import { createSlice } from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name: "cart",
    initialState:[],
    reducers:{
        AddItem:(state,action)=>{
            let existItem = state.find((item)=>item.id===action.payload.id)
            if(existItem){
                existItem.qty +=1
            }
            else{
                state.push(action.payload)
            }
        },
        RemoveItem:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload)  
        } ,
        Increaseqty:(state,action)=>{
            let existItem = state.find((item)=>item.id===action.payload.id)
            existItem.qty +=1
        },
        Decreaseqty:(state,action)=>{
            let existItem = state.find((item)=>item.id===action.payload.id)
            existItem.qty -=1
        }
    }

})

export const {AddItem,RemoveItem,Increaseqty,Decreaseqty} = cartSlice.actions
export default cartSlice.reducer