import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Workouts from "../Workout/Workouts";
import { setInitials } from "./loginSlice";
import './Login.css';

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const userData = JSON.parse(localStorage.getItem("user"));
  if (userData) {
    dispatch(setInitials(userData));
    return (
      <div>
        <Navbar username={userData.username} />
        <Workouts />
      </div>
    );
  }

  if (!userData) {
    const submit = async (e) => {
      e.preventDefault();
      if (email && password) {
        const response = await fetch("/user/login", {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: {
            "Content-type": "application/json",
          },
        });
        console.log("response\n\n", response);

        const data = await response.json();
        if (response.ok) {
          dispatch(setInitials(data));
          setEmail("");
          setPassword("");
        } else {
          setError(data.error);
          if (data.error === "Incorrect Password") {
            setPassword("");
          } else {
            setEmail("");
            setPassword("");
          }
          setTimeout(() => {
            setError("");
          }, 1500);
          console.log("error\n", data.error);
        }
      }
    };

    return (
      <div className="container  py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-10 col-xl-5">
            <div className="card rounded-3 py-4 ">
              <div className="card-body py-4 ">
                <h1 className="text-center">Login Panel</h1>
                <form onSubmit={submit}>
                  <span style={{ color: "red" }}>{error}</span>
                  <div className="form-group">
                    <label>
                      <strong>Email address</strong>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="form-group my-3">
                    <label>
                      <strong>Password</strong>
                    </label>

                    <input
                      type="password"
                      className="form-control mb-3"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <button className="btn btn-primary my-3">Submit</button>
                </form>
                <div className="text-center">
                  Don't have an account? <Link to={"/signup"}>Sign up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
