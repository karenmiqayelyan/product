import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    bag: [],
    loading: false,
    error: '',
}

export const Getbag = createAsyncThunk('get/bag', async (_, thunkAPI) => {
    try {
        const respons = await axios.get("http://localhost:3006/bag")
        return respons.data
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})


const BagSlice = createSlice({
    name: "bag",
    initialState,
    extraReducers: {
        [Getbag.pending]: (state) => {
            state.loading = true
        },
        [Getbag.fulfilled]: (state, action) => {
            state.loading = false
            state.error = ''
            state.bag = action.payload

        },
        [Getbag.rejected]: (state, action) => {
            state.error = action.payload
            state.loading = false
        }
    },
    
})
export default BagSlice.reducer