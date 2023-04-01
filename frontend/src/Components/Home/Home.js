import React from "react";
import bci from "../../Resources/images/hero-1.jpg";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${bci})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div>
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
