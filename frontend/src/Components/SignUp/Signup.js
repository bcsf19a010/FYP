import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { setInitials } from "../Login/loginSlice";
import { useDispatch } from "react-redux";

export default function Signup() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (!user) {
    const submit = async (e) => {
      e.preventDefault();
      if (username && email && password) {
        const response = await fetch("/user/signup", {
          method: "POST",
          body: JSON.stringify({ username, email, password }),
          headers: {
            "Content-type": "application/json",
          },
        });
        console.log("response\n\n", response);

        const data = await response.json();
        if (response.ok) {
          dispatch(setInitials(data));
        } else {
          setError(data.error);
          setTimeout(() => {
            setError("");
          }, 1500);
          console.log("error\n", data.error);
        }
        setUsername("");
        setEmail("");
        setPassword("");
      }
    };

    return (
      <div className="container  py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-10 col-xl-5">
            <div className="card rounded-3 py-4 ">
              <div className="card-body py-4 ">
                <h1 className="text-center">Sign Up</h1>
                <form onSubmit={submit}>
                  <span style={{ color: "red" }}>{error}</span>
                  <div className="container form-group">
                    <label>
                      <strong>Username</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      aria-describedby="emailHelp"
                      placeholder="Enter Username here"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  </div>
                  <div className="container form-group my-3">
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
                    />
                  </div>
                  <div className="container form-group my-3">
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
                    />
                  </div>
                  <button className="btn btn-primary my-3">Submit</button>
                </form>
                <div className="text-center">
                  Have an account? <Link to={"/"}>Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to={"/"} />;
  }
}
