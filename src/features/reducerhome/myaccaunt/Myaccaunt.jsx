import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Getmyaccaunt = createAsyncThunk('get/myacaunt', async (_, thunkAPI) => {
    try {
        const respons = await axios.get("http://localhost:3006/myaccaunt")
        return respons.data

    }
    catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})



const MyaccauntSlice = createSlice({
    name: "myaccaunt",
    initialState: {
        myaccaunt: [],
        loading: false,
        error: '',
        arrcomp:[
            {
                id:1,
                url:"./imagesaccaunt/IMG_0550_1440x640_crop_center 1.png",
                name:"Collection"
            },
            {
                id:2,
                url:"./imagesaccaunt/il_340x270 1.png",
                name:"bracelet belts"
            },
            {
                id:3,
                url:"./imagesaccaunt/HTB1ao0uQH2pK1RjSZFsq6yNlXXah 1.png",
                name:"necklace"
            },
            {
                id:4,
                url:"./imagesaccaunt/457496.png",
                name:"pendant",
                url1:"./imagesaccaunt/457501.png",
                url2:"./imagesaccaunt/457512.png"
            },
            {
                id:5,
                url:"./imagesaccaunt/925-Sterling-Silver-Bead-Reflexions-Clip-Charms-Fit-Original-Pandora-Reflexions-Bracelet-Women-DIY-Europe-Jewelry 1.png",
                name:"charms"
            },
            {
                id:6,
                url:"./imagesaccaunt/925-Sterling-Silver-Bead-Reflexions-Clip-Charms-Fit-Original-Pandora-Reflexions-Bracelet-Women-DIY-Europe-Jewelry 1 (1).png",
                name:"Belts"
            }
        ],
        listarr: [
            {
                arr: [
                    {
                        id: 1,
                        name: "Woman"
                    },
                    {
                        id: 2,
                        name: "Man"
                    },
                    {
                        id: 3,
                        name: "Kids"
                    },
                    {
                        id: 4,
                        name: "Animals"
                    },
                ]
            },
            {
                arr: [
                    {
                        id: 5,
                        name: "symbol"
                    },
                    {
                        id: 6,
                        name: "all symbols"
                    },
                    {
                        id: 7,
                        name: "heart"
                    },
                    {
                        id: 8,
                        name: "moon+star"
                    },
                    {
                        id: 9,
                        name: "feather"
                    },
                    {
                        id: 10,
                        name: "letter"
                    },
                ]
            },
            {
                arr: [

                    {
                        id: 11,
                        name: "Leather bracelet"
                    },
                    {
                        id: 12,
                        name: "charm bracelet"
                    }, 
                    {
                        id: 13,
                        name: "Silicone bracelet"
                    },
                    {
                        id: 14,
                        name: "chain bracelet"
                    },
                ]
            },
            {
                arr: [

                    {
                        id: 15,
                        name: "silver"
                    },
                    {
                        id: 16,
                        name: "gold"
                    },
                    {
                        id: 17,
                        name: "rose gold"
                    },
                    {
                        id: 18,
                        name: "two tone"
                    },
                    {
                        id: 19,
                        name: "mixed metal"
                    },
                    {
                        id: 20,
                        name: "midnight silver"
                    },
                ]
            },
        ]
    },
    extraReducers: {
        [Getmyaccaunt.pending]: (state) => {
            state.loading = true
        },
        [Getmyaccaunt.fulfilled]: (state, action) => {
            state.loading = false
            state.error = ""
            state.myaccaunt = action.payload
        },
        [Getmyaccaunt.pending]: (state, action) => {
            state.error = action.payload
            state.loading = false
        }
    }
})

export default MyaccauntSlice.reducer