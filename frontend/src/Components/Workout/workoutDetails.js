import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteWorkout } from "./workoutSlice";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default function WorkoutDetails(props) {
  const token = useSelector((state) => state.loginR.token);
  const dispatch = useDispatch();
  const delWorkout = async () => {
    const response = await fetch("/workout/" + props.workout._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log("in response", response);
    const json = await response.json();

    if (response.ok) {
      // console.log("in dispatch");
      dispatch(deleteWorkout(json));
    } else {
      // console.log("in else", json.error);
    }
  };

  return (
    <div className="card my-3">
      <div
        className="card-header"
        style={{
          color: "green",
          fontSize: "200%",
        }}
      >
        <b>{props.workout.title}</b>
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>
            <strong>Weight: </strong>
            {props.workout.weight} (kg)
          </p>
          <p>
            <strong>Reps: </strong>
            {props.workout.reps}
          </p>
          <footer className="blockquote-footer">
            Created{" "}
            {formatDistanceToNow(new Date(props.workout.createdAt), {
              addSuffix: true,
            })}
          </footer>
          <button className="btn btn-primary" onClick={delWorkout}>
            Delete Workout
          </button>
        </blockquote>
      </div>
    </div>
  );
}
