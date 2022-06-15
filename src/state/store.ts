import { configureStore } from '@reduxjs/toolkit';
import auth from './slice';

const store = configureStore({
  reducer: {
    auth,
  },
});

export default store;
