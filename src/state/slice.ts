/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// import SessionStorage from '../libs/SessionStorage';

const initialState = {
  loggedIn: false,
  token: null,
  user: [],
};
console.log(initialState, 'global redux');
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, { payload }) {
      state.loggedIn = true;
      state.token = payload.token;
      state.user = [...state.user, payload.user];
      // state.redirectTo = payload.redirectTo;
      // SessionStorage.set('auth', state);
    },
    logout(state) {
      state.loggedIn = false;
      state.token = null;
      state.user = [];
      // state.redirectTo = null;
      // SessionStorage.clear('auth');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export const selectAuth = (state) => state.auth;
export const selectState = (state) => state;
export default authSlice.reducer;
