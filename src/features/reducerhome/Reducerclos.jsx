import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetClos=createAsyncThunk('get/clos' , async(_,thunkAPI)=>{
        try{
            const respons = await axios.get('http://localhost:3006/clouse')
            return respons.data
        }
        catch(error){
            return thunkAPI.rejectWithValue(error)
        }
})

const ClosSlice = createSlice({
    name:'clos',
    initialState:{
        clos:[],
        loading:false,
        error:'',
    },
    extraReducers:{
        [GetClos.pending]:(state)=>{
            state.loading = true
        },
        [GetClos.fulfilled]:(state , action)=>{
            state.loading = false
            state.error = ''
            state.clos = action.payload
        },
        [GetClos.rejected]:(state , action)=>{
                state.loading = false
                state.error = action.payload
        }
    }
})

export default ClosSlice.reducer