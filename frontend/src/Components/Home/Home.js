import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="text">
          <span>Shape Your Body</span>
          <h1>
            Be <font color="orangered">Strong</font> <br></br> Training Hard
          </h1>
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
    </div>
  );
}
