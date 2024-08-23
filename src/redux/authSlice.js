// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false, // Initial state: not logged in
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state) {
            state.isLoggedIn = true; // Set isLoggedIn to true when login action is dispatched
        },
        logout(state) {
            state.isLoggedIn = false; // Set isLoggedIn to false when logout action is dispatched
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
