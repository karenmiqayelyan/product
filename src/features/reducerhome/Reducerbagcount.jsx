import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const Getbagcount = createAsyncThunk('get/bagcount', async (_, thunkAPI) => {
    try {

        const respons = await axios.get("http://localhost:3006/bagcount")
        return respons.data
    }
    catch (error) {
      
        return thunkAPI.rejectWithValue(error)
    }
})
const BagcountSlice = createSlice({
    name: "bagcount",
    initialState:{
        gumar:[{
            gumar1:0
        }],
        loading:false,
        error:'',
        cou:0
    },
    extraReducers: {
        [Getbagcount.pending]: (state) => {
            state.loading = true
        },
        [Getbagcount.fulfilled]: (state, action) => {
            state.loading = false
            state.error = ''
            state.gumar = action.payload
        },
        [Getbagcount.rejected]: (state, action) => {
            state.error = action.payload
            state.loading = false
        }
    },
    reducers: {
        Gumar: (state, action) => {
            if (action.payload.type == "count") {
                state.cou = action.payload.count 
            } 

        },
    }
})
export const { Gumar } = BagcountSlice.actions
export default BagcountSlice.reducer