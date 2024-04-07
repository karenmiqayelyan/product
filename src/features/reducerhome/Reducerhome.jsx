import { createAsyncThunk, createSlice,  } from "@reduxjs/toolkit";
import axios from "axios";

 export const Gethome = createAsyncThunk('get/home' , async (_,thunkAPI)=>{
                try{
                    const respons = await axios.get('http://localhost:3006/categoryimages')
                    return respons.data
                }
                catch(error){
                    return thunkAPI.rejectWithValue(error)
                }
 })
 const homeSlice = createSlice({
    name:'home',
    initialState:{
        homearr:[],
        laoding:false,
        error:'',
        count:0,
        countitem:false
    },
    extraReducers:{
        [Gethome.pending]:(state)=>{
            state.laoding = true
        },
        [Gethome.fulfilled]:(state,action)=>{
            state.homearr = action.payload
            state.laoding = false
            state.error = ''
        },
        [Gethome.rejected] :(state,action)=>{
            state.laoding = false
            state.error =action.payload
        }
    },
    reducers:{
        Count:(state , action)=>{
            if(action.payload>=0){
                state.count = action.payload
            } 
             if(action.payload == 0){
                state.count = 0
                state.countitem = true
            }
        }
    }
 })
 export const {Count}=homeSlice.actions
 export default homeSlice.reducer