import React from "react";
import { useEffect } from "react";
import WorkoutDetails from "./workoutDetails";
import { useSelector, useDispatch } from "react-redux";
import { setWorkouts } from "./workoutSlice";
import WorkoutForm from "./WorkoutForm";
// import { allSelectedWorkouts } from "./workoutSlice";

export default function Workouts() {
  const token = useSelector((state) => state.loginR.token);
  const AllWorkouts = useSelector((state) => state.workouts.workout);
  const dispatch = useDispatch();
  // console.log("use selector data", { AllWorkouts });

  useEffect(() => {
    const fetchAllWorkouts = async () => {
      const data = await fetch("/workout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const allWorkouts = await data.json();
      // console.log("api workouts", allWorkouts);
      if (data.ok) {
        dispatch(setWorkouts(allWorkouts));
        //console.log(state.workouts);
        // setWorkouts(allWorkouts);
      }
    };
    fetchAllWorkouts();
  }, [dispatch, token]);

  return (
    <>
      <div className="container workouts my-5 ">
        <div className="row">
          <div className="col-lg-8 col-sm-12 col-md-12">
            {AllWorkouts?.map((workout) => {
              // console.log({ workout });
              return <WorkoutDetails key={workout._id} workout={workout} />;
            })}
          </div>
          <div className="col-lg-4 col-sm-12 col-md-12">
            <WorkoutForm />
          </div>
        </div>
      </div>
    </>
  );
}
