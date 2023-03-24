import { createSlice } from "@reduxjs/toolkit";

const workoutSlice = createSlice({
  name: "workouts",
  initialState: {
    workout: [],
  },
  reducers: {
    setWorkouts(state, action) {
      // console.log("in setWorkouts");
      // console.log("state before", state);
      // state.workout.push(action.payload);
      state.workout = action.payload;
      // state = [action.payload];
      // console.log("payloads", action.payload);
      // console.log("state", state);
    },
    addWorkout: {
      reducer(state, action) {
        state.workout.unshift(action.payload.workout);
      },
      prepare(workout) {
        return {
          payload: {
            workout,
          },
        };
      },
    },
    deleteWorkout(state, action) {
      // console.log("in delete workout redux", state.workout);
      // console.log("\naction payload", action.payload);
      state.workout = state.workout.filter(
        (exercise) => exercise._id !== action.payload._id
      );
      // console.log("\n after\n", state.workout);
    },
  },
});

export const allSelectedWorkouts = (state) => state.workouts;
export const { setWorkouts, addWorkout, deleteWorkout } = workoutSlice.actions;
export default workoutSlice.reducer;
