import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetRefresh = createAsyncThunk("get/Refresh" , async (_,thunkAPI)=>{
    try{
        const respons = await axios.get("http://localhost:3006/refresh")
        return respons.data
    }
    catch(error){
      return thunkAPI.rejectWithValue(error)
    }
})

const RefreshSlice = createSlice({
    name:"refresh",
    initialState:{
        refresh:[],
        loading:false,
        error:'',
        sum:0
    },
    extraReducers:{
        [GetRefresh.pending]:(state)=>{
            state.loading=true
        },
        [GetRefresh.fulfilled]:(state , action)=>{
            state.loading = false
            state.refresh = action.payload
            state.error  = ""
        },
        [GetRefresh.rejected]:(state , action)=>{
            state.loading = false
            state.error = action.payload
        }
    },
    reducers:{
        Sum:(state ,action)=>{
            
           if(action.payload.type == "sum"){
                state.sum = action.payload.summ
           } else {
            state.sum = state.sum+Number(action.payload)
           }
        }
    }
})
export const {Sum} = RefreshSlice.actions
export default RefreshSlice.reducer