import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Getcolortwoo = createAsyncThunk('get/colortwoo' , async (_,thunkAPI)=>{
                    try{
                        const respons = await axios.get(' http://localhost:3007/colortwoo')
                        return respons.data
                    }
                    catch(error){
                        return thunkAPI.rejectWithValue(error)
                    }
})

const SLicecolortwoo = createSlice({
    name:"colortwo",
    initialState:{
        loading:false,
        error:'',
        colortwoo:[
            {
            id: 1,
            color: "#3F4249",
            colorsum: 4900
          },
         
        ]
    },
    extraReducers:{
        [Getcolortwoo.pending]:(state)=>{
            state.loading = true
        },
        [Getcolortwoo.fulfilled]:(state , action)=>{
            state.loading = false
            state.error = ''
            state.colortwoo = action.payload
        },
        [Getcolortwoo.rejected]:(state , action)=>{
            state.loading = false
            state.error = action.payload
        }
    }
})
export default  SLicecolortwoo.reducer