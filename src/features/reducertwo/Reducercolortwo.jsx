import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Getcolortwo = createAsyncThunk('get/colortwo' , async (_,thunkAPI)=>{
                    try{
                        const respons = await axios.get(' http://localhost:3007/colortwo')
                        return respons.data
                    }
                    catch(error){
                        return thunkAPI.rejectWithValue(error)
                    }
})

const SLicecolortwo = createSlice({
    name:"colortwo",
    initialState:{
        loading:false,
        error:'',
        colortwo:[
            {
            id: 1,
            color: "#3F4249",
            colorsum: 4900
          },
         
        ]
    },
    extraReducers:{
        [Getcolortwo.pending]:(state)=>{
            state.loading = true
        },
        [Getcolortwo.fulfilled]:(state , action)=>{
            state.loading = false
            state.error = ''
            state.colortwo = action.payload
        },
        [Getcolortwo.rejected]:(state , action)=>{
            state.loading = false
            state.error = action.payload
        }
    }
})
export default  SLicecolortwo.reducer