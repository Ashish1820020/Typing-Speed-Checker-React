import { configureStore } from '@reduxjs/toolkit'
import stateReducer from './slice/state';
const store = configureStore({
  reducer: {
    stateSlice: stateReducer
  },
});

export type RootState =  typeof store.dispatch;
export default store;