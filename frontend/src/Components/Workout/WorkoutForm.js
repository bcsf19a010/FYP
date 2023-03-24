import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWorkout } from "./workoutSlice";

export default function WorkoutForm() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.loginR.token);
  const [title, setTitle] = useState("");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState("");

  const submitForm = async (event) => {
    event.preventDefault();
    if (title && reps && weight) {
      const workout = { title, reps, weight };
      const response = await fetch("/workout", {
        method: "POST",
        body: JSON.stringify(workout),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();

      // console.log("response", json);
      if (response.ok) {
        dispatch(addWorkout(json));
        setTitle("");
        setWeight("");
        setReps("");
        setError("");
      } else {
        setError(json.error);
      }
    } else {
      setError("!!! Please fill all the fields");
      setTimeout(() => {
        setError("");
      }, 1500);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Add Exercise</h1>
      <p style={{ color: "red" }}>{error}</p>
      <form onSubmit={submitForm}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="weight" className="form-label">
            weight
          </label>
          <input
            type="number"
            className="form-control"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reps" className="form-label">
            Reps
          </label>
          <input
            type="number"
            className="form-control"
            value={reps}
            onChange={(e) => {
              setReps(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary mb-2">
          Submit
        </button>
      </form>
    </div>
  );
}
