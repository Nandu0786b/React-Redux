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
        UpdateName:(state,action)=>{
            state.name=action.payload
        },
        Updatenumber:(state,action)=>{
            state.pNumber=action.payload
        },
        Updatecountry:(state,action)=>{
            state.country=action.payload
        },
        Updateplan:(state,action)=>{
            state.Plan=action.payload
        },
        Updatevaluei:(state,action)=>{
            state.value=action.payload
        },
        Updatevalued:(state,action)=>{
            state.name=action.payload
        }
    }
})

export const { UpdateName, Updatenumber, Updatecountry,Updateplan,Updatevaluei,Updatevalued,userdetails } = userSlice.actions;

export default userSlice.reducer;