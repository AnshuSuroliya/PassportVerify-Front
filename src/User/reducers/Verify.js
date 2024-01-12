import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const verifyPassport=createAsyncThunk("verifyPassport", async(fdata,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4700/v1/api/verify",{
        method:"POST",
        headers:{
            "Content-Type":"multipart/form-data",  
        },
        body:fdata
    });
    try{
        const result=await response.json();
        console.log(result);
        return result;
    } catch(error){
            rejectWithValue(error);
    }
});
const verifySlice=createSlice({
    name:"verifySlice",
    initialState:{
        PassportData:[],
        isLoading:false,
        error:null
    },
    extraReducers: builder=>{
        builder.addCase(verifyPassport.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(verifyPassport.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.PassportData.push(action.payload);
        })
        .addCase(verifyPassport.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
    }
})
export default verifySlice.reducer;