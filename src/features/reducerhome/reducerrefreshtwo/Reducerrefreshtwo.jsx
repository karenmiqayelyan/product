import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Getrefreshtwo = createAsyncThunk("get/refreshtwo" , async(_,thunkAPI)=>{
      try{
        const respons = await axios.get(" http://localhost:3007/refreshtwo")
        return respons.data
      }
      catch(error){
        return thunkAPI.rejectWithValue(error)
      }
})

const SliceREfreshtwo =createSlice({
    name:"refreshtwo",
    initialState:{
        loading:false,
        error:"",
        refreshtwo:[],
        sumtwo:0

    },
    extraReducers:{
        [Getrefreshtwo.pending]:(state)=>{
            state.loading = true
        },
        [Getrefreshtwo.fulfilled]:(state , action)=>{
            state.error = ""
            state.loading = false
            state.refreshtwo = action.payload
        },
        [Getrefreshtwo.rejected]:(state , action)=>{
            state.error = action.payload
            state.loading = false
        }
    },
    reducers:{
        Sumtwo:(state ,action)=>{
            
           if(action.payload.type == "sum"){
                state.sumtwo = action.payload.summ
           } else {
            state.sumtwo = state.sumtwo+Number(action.payload)
           }
        }
    }
})
export const {Sumtwo} = SliceREfreshtwo.actions
export default SliceREfreshtwo.reducer