import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    isLogged: false,
  },
  reducers: {
    login: (state, action) => {
      console.log("success");
      state.isLogged = true;
    },
    getuser: (state, action) => {
      return { ...state, user: action.payload.user };
    },
  },
});
const { actions, reducer } = authSlice;
export const { login, getuser } = actions;
export default reducer;
