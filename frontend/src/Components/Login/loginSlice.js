import { createSlice } from "@reduxjs/toolkit";
const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: null,
    username: null,
  },
  reducers: {
    setInitials(state, action) {
      console.log(action.payload);
      state.token = action.payload.token;
      state.username = action.payload.username;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logoutUser(state) {
      state.token = null;
      state.username = null;
      localStorage.removeItem("user");
    },
  },
});

export const { setInitials, logoutUser } = loginSlice.actions;
export default loginSlice.reducer;
