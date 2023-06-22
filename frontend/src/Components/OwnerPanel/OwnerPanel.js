import React from "react";
import "./ownerPanel.css";

export default function OwnerPanel() {
  const username = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className="op-home">
        <div className="op-cntnr">
          <div>
            <h1 style={{ color: "white" }}>
              Hi! <i>{username.username}</i>
            </h1>
            <p className="op-txt">Build the body, build the business.</p>
          </div>
        </div>
      </div>

      <div className="op-cntnr" style={{ backgroundColor: "#EBEDEF" }}>
        <h1 style={{ fontWeight: "bold" }}>
          We Transform bodies,we transform lives
        </h1>
        <p>In the gym, we lift each other up, both physically and mentally.</p>
      </div>
      {/* <div className="op-card-container" style={{ margin: "50px 0px" }}> */}
      <div
        className="op-card"
        style={{ background: "linear-gradient(to right, #bdc3c7 , #2c3e50)" }}
      >
        <a href="/viewUser">
          <img
            className="nImg"
            src={`${process.env.PUBLIC_URL}/images/fitness.png`}
            alt="myImage"
          ></img>
          <h1>Members</h1>
        </a>
      </div>
      <div
        className="op-card"
        style={{ background: "linear-gradient(to right,#2c3e50, #bdc3c7)" }}
      >
        <a href="/viewTrainers" className="ebuttonForop">
          <img
            className="nImg"
            src={`${process.env.PUBLIC_URL}/images/coach.png`}
            alt="myImage"
          ></img>
          <h1>Trainers</h1>
        </a>

        {/* </div> */}
      </div>

      {/* <div className="op-card" style={{ backgroundColor: "#F8B801" }}>
          <a href="calNutrient" className="ebuttonForop">
            <img
              className="nImg"
              src={`${process.env.PUBLIC_URL}/images/ebook.png`}
              alt="myImage"
            ></img>
            <h1>See Ebooks</h1>
          </a>
          <i>
            <h4 style={{ color: "white" }}>
              Want to Train Like Professionals?
            </h4>
            <h4 style={{ color: "white" }}>See Our Ebooks.</h4>
          </i>
        </div> */}
    </>
  );
}
