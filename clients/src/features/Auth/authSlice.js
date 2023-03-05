import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: localStorage.getItem("Login")
    ? JSON.parse(localStorage.getItem("Login"))
    : {},
  isLogged: localStorage.getItem("State")
    ? JSON.parse(localStorage.getItem("State"))
    : false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
      localStorage.setItem("Login", JSON.stringify(state.user.name || null));
      localStorage.setItem("State", JSON.stringify(state.isLogged));
    },
    getuser: (state, action) => {
      return { ...state, user: action.payload.user };
    },
    logout: (state, action) => {
      state.user = action.payload;
      state.isLogged = false;
      localStorage.setItem("Login", JSON.stringify(null))
      localStorage.setItem("State",JSON.stringify(state.isLogged));
    },
  },
});
const { actions, reducer } = authSlice;
export const { login, getuser, logout } = actions;
export default reducer;
