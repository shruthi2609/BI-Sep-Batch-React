import { createSlice } from "@reduxjs/toolkit";
const userSlice=createSlice({
    name:"userinfo",
    initialState:{
        state:{
            email:"dummy@gmail.com",
            username:"admin123",
            role:"admin"
        }
    },
    reducers:{
        login:(globalState,action)=>{
            //console.log("inside action",action)
            //console.log("inside action : state",state)
            //fill it
            globalState.state=action.payload

        },
        logout:(globalState)=>{
           globalState.state={
            email:"dummy@gmail.com",
            username:"admin123",
            role:"admin"
           }
        }
    }
})
export const {login,logout}=userSlice.actions
export default userSlice.reducer