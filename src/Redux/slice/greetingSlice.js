import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Creating an action that will trigger the API request to fetch
// We use asyncThunk to handle the asynchronous actions for request

export const fetchRandomGreeting = createAsyncThunk(
  'greeting/fetchRandomGreeting',
  async () => {
    const response = await fetch('http://localhost:3001/api/v1/greetings/index');
    const data = await response.json();
    return data.greeting;
  },
);

// We define the reducer function that will handle
// the updates of the state based on the API result
// For that, we create a slice using the createSlice function
// from Redux Toolkit to define the reducer
// with the initial state and the action that will update the state

const initialState = {
  greeting: ' ',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRandomGreeting.fulfilled, (state, action) => {
      state.greeting = action.payload;
    });
  },
});

export default greetingSlice.reducer;
