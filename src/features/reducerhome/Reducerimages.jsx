import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Getimages = createAsyncThunk('get/images' , async (_,thunkAPI)=>{
    try{
        const respons = await axios.get("http://localhost:3006/categoryimages2")
        return respons.data
    }
    catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})

const ImagesSlice = createSlice({
        name:'images',
        initialState:{
            images:[],
            loading: false,
            error:''
        },
        extraReducers:{
            [Getimages.pending]:(state)=>{
                state.loading = true
            },
            [Getimages.fulfilled]:(state , action)=>{
                state.loading = false
                state.error = ""
                state.images = action.payload
            },
            [Getimages.pending]:(state , action)=>{
                state.loading = false
                state.error = action.payload
            }
        }
})
export default ImagesSlice.reducer