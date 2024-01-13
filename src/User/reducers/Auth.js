import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registerUser=createAsyncThunk("registerUser", async(data,{rejectWithValue})=>{
    const response=await fetch("http://localhost:4700/v1/auth/signup",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    });
    try{
        const result=await response.json();
        console.log(result);
        return result;
    } catch(error){
            rejectWithValue(error);
    }
})
export const loginUser=createAsyncThunk("loginUser", async(data,{rejectWithValue})=>{
    try{
    const response=await fetch("http://localhost:4700/v1/auth/signin",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    });
        const result=await response.json();
        console.log(result);
        if(result.success){
        const jwt=result.jwt;
        localStorage.setItem("jwt",jwt);
        localStorage.setItem("success",result.success);
        }
        return result;
    } catch(error){
            rejectWithValue(error);
    }
})
export const logout=createAsyncThunk("logout",async(args,{rejectWithValue})=>{
    try{
        localStorage.clear();
    }catch(error){
        rejectWithValue(error);
    }
})
const registerSlice=createSlice({
    name:"registerSlice",
    initialState:{
        user:[],
        loginData:[],
        isLoading:false,
        error:null

    },
    extraReducers: builder=>{
       builder.addCase(registerUser.pending,(state)=>{
                state.isLoading=true;
            })
       .addCase(registerUser.fulfilled,(state,action)=>{
                state.isLoading=false;
                state.user=(action.payload);
        })
        .addCase(registerUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
        .addCase(loginUser.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.loginData=action.payload;
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.payload;
        })
        .addCase(logout.fulfilled,(state)=>{
            state.loginData=[];
            state.user=[];
        })
    }
})
export default registerSlice.reducer;