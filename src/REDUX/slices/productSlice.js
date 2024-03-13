import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// here fetchProducts is the action
 export const fetchProducts=createAsyncThunk('products/fetchProducts',async()=>{
    const response=await axios.get("https://dummyjson.com/products")
    // console.log(response.data.products);
    // store to sessionStorage it is permenent
    sessionStorage.setItem("allProducts",JSON.stringify(response.data.products))
    return response.data.products
})

const productSlice= createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        error:"",
        loading:false
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false
            state.allProducts=action.payload
            state.error=""
        })
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.loading=true
            state.allProducts=[]
            state.error=""
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading=false
            state.allProducts=[]
            state.error="API call failed..Please try after some time!! "
        })

    }

})
export default productSlice.reducer