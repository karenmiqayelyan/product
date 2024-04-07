import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Getbagtwo=createAsyncThunk('get/bagtwo' , async(_,thunkAPI)=>{
        try{
            const respons = await axios.get('http://localhost:3006/bagtwoarr')
            return respons.data
        }
        catch(error){
            return thunkAPI.rejectWithValue(error)
        }
})

const BagtwoSlice = createSlice({
    name:'bagtwo',
    initialState:{
        bagtwo:[],
        loading:false,
        error:'',
    },
    extraReducers:{
        [Getbagtwo.pending]:(state)=>{
            state.loading = true
        },
        [Getbagtwo.fulfilled]:(state , action)=>{
            state.loading = false
            state.error = ''
            state.bagtwo = action.payload
        },
        [Getbagtwo.rejected]:(state , action)=>{
                state.loading = false
                state.error = action.payload
        }
    }
})

export default BagtwoSlice.reducer