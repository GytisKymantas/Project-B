import { createSlice } from '@reduxjs/toolkit';
import {
  setStorage,
  getStorage,
  clearStorage,
} from '../sessionStorage/SessionStorage';
import { InitialStateTypes } from './types';

const initialState = getStorage('auth') ?? {
  loggedIn: false,
  token: null,
  user: [],
};
console.log(initialState.user, 'global redux');
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, { payload }) {
      state.loggedIn = true;
      state.token = payload.token;
      state.user = [...state.user, payload.user];
      setStorage('auth', state);
    },
    setDelete(state, { payload }) {
      state.user = payload;
      setStorage('auth', state);
    },
  },
});

export const { loginSuccess, setDelete } = authSlice.actions;

export const selectAuth = (state: InitialStateTypes) => state.auth;
export const selectState = (state: InitialStateTypes) => state;
export default authSlice.reducer;
