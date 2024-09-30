import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/"

//  ф-ція збереження токену для наступної передачі /Bearer ${token} пробіл обов'язково 
const setAuthHeder = (token) => { 
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
} 

//  необхідно передати ім'я, email, password
//  credentials загально принята константа для передачі данних (об'єкту)
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`/users/signup`, credentials);
      setAuthHeder(data.token); // передача ф-ції токену в axios
      console.log("signup.data", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage); //  опрацювання помилки методом rejectWithValue
    }
  }
);

export const logIn = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post(`/users/login`, credentials);
    setAuthHeder(data.token) // передача ф-ції токену в axios
    // console.log("login.data", data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.massage); //  опрацювання помилки методом rejectWithValue
  }
});

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(`/users/logout`);
      console.log("response.data", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage); //  опрацювання помилки методом rejectWithValue
    }
  }
);