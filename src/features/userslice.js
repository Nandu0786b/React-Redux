import { createSlice } from "@reduxjs/toolkit";
const  initialState={
    name:"Algo Sathi User",
    pNumber:12345678,
    country:"india",
    value:0,
    Plan:"Basic"
}

export const userSlice=createSlice({
    name:"showData",
    initialState,
    reducers:{
        userdetails: (state, action) => {
            const { name, pNumber, country } = action.payload;
            state.name = name;
            state.pNumber = pNumber;
            state.country = country;
          },
        UpdateName:()=>{

        },
        Updatenumber:()=>{
            
        },
        Updatecountry:()=>{
            
        },
        Updateplan:()=>{
            
        },
        Updatevaluei:()=>{
            
        },
        Updatevalued:()=>{
            
        }
    }
})

export const { UpdateName, Updatenumber, Updatecountry,Updateplan,Updatevaluei,Updatevalued,userdetails } = userSlice.actions;

export default userSlice.reducer;