import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

//creating an action that will trigger the API request to  fetch
//we use asyncThunk to handle the asynchronous  actions for request

export const fetchRandomGreeting = createAsyncThunk(
  'greeting/fetchRandomGreeting', 
  async () => {
    const response = await fetch('http://localhost:3000/api/v1/greetings');
    const data = await response.json();
    return data.greeting;
  }
);

//We define the reducer function that will handle the updates of the state base on the API result 
//For that we create a slice using the createSlice function from Redux Toolkit to define the reducer with the initial state and the action that will update the state

const initialState = {
  greeting: '',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder.addCase(fetchRandomGreeting.fulfilled, (state, action) => {
      state.greeting = action.payload;
    });
    },
});

export default greetingSlice.reducer;