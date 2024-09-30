import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/"
//  при необхідності додавання ще одного запиту на бекенд то записується так:
// export const TWO_API = axios.create({
//    baseURL: "https://connections-api.goit.global/"
//  })

//  ф-ція збереження токену для наступної передачі /Bearer ${token} пробіл обов'язково 
const setAuthHeder = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  //  для другого API де необхідно вказувати другй API замість axios
  //  TWO_API.defaults.headers.common.Authorization = `Bearer ${token}`
} 


//  очищення токену при виході logOut
const clearAuthHeder = () => {
  axios.defaults.headers.common.Authorization = ``;
 }; 

//  необхідно передати ім'я, email, password
//  credentials загально принята константа для передачі данних (об'єкту)
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`/users/signup`, credentials);
      //  для другого API де необхідно вказувати другй API замість axios
      // const { data } = await TWO_API.post(`/users/signup`, credentials);
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

export const logOut = createAsyncThunk("auth/logout",async (_, thunkAPI) => {
    try {
      const { data } = await axios.post(`/users/logout`);
      // console.log("response.data", response.data);
      clearAuthHeder();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage); //  опрацювання помилки методом rejectWithValue
    }
  }
);


//  створення санки для локал сторич, який перевіряється в APP при монтуванні
export const refreshUser = createAsyncThunk(`auth/refresh`, async (_, thunkAPI) => {
  // console.log("thunkAPI", thunkAPI);  //  токен знаходиться в методі getState
  const reduxState = thunkAPI.getState();
  // console.log("tokene", reduxState.auth.token);
  setAuthHeder(reduxState.auth.token);
  const response = await axios.get(`/users/current`);
  return response.data;
},
//  функція умови віконання. Якщо повертає true, умова виконується
  {
    condition: (_,thunkAPI) => {
      const reduxState = thunkAPI.getState();
      // console.log("reduxState", reduxState);
    return reduxState.auth.token !== null 
  } }
)