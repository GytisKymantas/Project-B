import { createSlice } from '@reduxjs/toolkit';
import {
  setStorage,
  getStorage,
  clearStorage,
} from '../sessionStorage/SessionStorage';

// const SessionStorage = new (class SessionStorage {
//   constructor() {
//     this.storage = window.sessionStorage;
//   }

//   set(name, value) {
//     this.storage.setItem(name, JSON.stringify(value));
//   }

//   get(name) {
//     const value = this.storage.getItem(name);
//     return value ? JSON.parse(value) : null;
//   }

//   clear(name) {
//     this.storage.removeItem(name);
//   }
// })();

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

      // state.redirectTo = payload.redirectTo;
      // SessionStorage.set('auth', state);
    },
    logout(state) {
      state.loggedIn = false;
      state.token = null;
      state.user = [];
      clearStorage('auth');

      // state.redirectTo = null;
      // SessionStorage.clear('auth');
    },
    setDelete(state, { payload }) {
      state.user = payload;
      console.log(payload, 'from setDelete yo');
      console.log(state, 'from state yo');
      setStorage('auth', state);
    },
  },
});

export const { loginSuccess, logout, setDelete } = authSlice.actions;

export const selectAuth = (state) => state.auth;
export const selectState = (state) => state;
export default authSlice.reducer;
