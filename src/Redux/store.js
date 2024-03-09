import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './slice/greetingSlice';

export const store = configureStore({
  reducer: { greetingSlice },
});

export default store;
