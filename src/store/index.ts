import { configureStore } from '@reduxjs/toolkit';
import petsReducer from './petsSlice';

export const store = configureStore({
  reducer: {
    pets: petsReducer,
  },
});

export * from './petsSlice';
