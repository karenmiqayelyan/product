import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const GetWishlist =createAsyncThunk('get/wishlist' , async(_,thunkAPI)=>{
                try{
                    const respons = await axios.get("http://localhost:3006/wishlist")
                    return respons.data
                }

                catch(error){
                    return thunkAPI.rejectWithValue(error)
                }
})      

const WishlistSlice = createSlice({
    name:"wishlist",
    initialState:{
        wishlist:[],
        error:'',
        loading:false,
        iconitem:false,
        images:[],
        page:1
    },
    extraReducers:{
        [GetWishlist.pending]:(state)=>{
            state.loading = true
        },
        [GetWishlist.fulfilled]:(state , action)=>{
            state.wishlist = action.payload
            state.error = ""
            state.loading = false
        },
        [GetWishlist.rejected]:(state , action)=>{
            state.error = action.payload
        }
    },
    reducers:{
        Addwishlist:(state , action)=>{
           state.iconitem = action.payload
           
        },
        Modalimage:(state , action)=>{
            state.images = [action.payload]
        },
        Pageniation:(state , action)=>{
            state.page = action.payload
        }
    }
})
export const {Addwishlist , Modalimage , Pageniation} = WishlistSlice.actions
export default WishlistSlice.reducer