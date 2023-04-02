import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url("images/hero-1.jpg")`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div className="text">
        <h3>Shape Your Body</h3>
        <h1>Be Strong <br></br> Training Hard</h1>
      </div>
      <div className="buttons">
        <Link to="/login" className="Button lgn">
          Login
        </Link>
        <Link to="/signup" className="Button sg">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
