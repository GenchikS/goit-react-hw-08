import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const API_KEY = "https://66f052f0f2a8bce81be59f22.mockapi.io/";

// fdffdfdffd12121@kkkkk.com

//  необхідно передати ім'я, email, password
//  credentials загально принята константа для передачі данних (об'єкту)
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const {data} = await axios.post(
        `https://connections-api.goit.global/users/signup`,
        credentials
      );
      console.log("data", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage); //  опрацювання помилки методом rejectWithValue
    }
  }
);

// export const logIn = createAsyncThunk(
//   "auth/login",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.post(`${API_KEY}/contacts`);
//       console.log("response.data", response.data);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.massage); //  опрацювання помилки методом rejectWithValue
//     }
//   }
// );

// export const logOut = createAsyncThunk(
//   "auth/logout",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.post(`${API_KEY}/contacts`);
//       console.log("response.data", response.data);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.massage); //  опрацювання помилки методом rejectWithValue
//     }
//   }
// );