import { createSlice } from "@reduxjs/toolkit";
import { register } from "./operations";


const authSlice = createSlice({
    name: "auth",
    initialState : {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: (bilder) =>
        bilder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
})

export const authReducer = authSlice.reducer;