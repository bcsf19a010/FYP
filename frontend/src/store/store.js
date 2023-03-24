import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../Components/Login/loginSlice";
//import signupReducer from "../Components/SignUp/signupSlice";
import workoutReducer from "../Components/Workout/workoutSlice";

export const store = configureStore({
  reducer: {
    workouts: workoutReducer,
    loginR: loginReducer,
    //signUp: signupReducer,
  },
});
