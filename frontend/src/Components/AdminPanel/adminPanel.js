import React from "react";
import "./adminPanel.css";

function AdminPanel() {
  const username = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div className="ap-home">
        <div className="ap-cntnr">
          <div>
            <h1 style={{ color: "white" }}>
              Hi! <i>{username.username}</i>
            </h1>
            <p className="ap-txt">
              Believe in yourself and you will be unstoppable
            </p>
          </div>
        </div>
      </div>

      <div className="ap-cntnr">
        <h1 style={{ fontWeight: "bold" }}>We care about what we offer</h1>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>
      <div className="ap-card-container" style={{ marginTop: "50px" }}>
        <div className="ap-card" style={{ backgroundColor: "#B03A2E" }}>
          <a href="/viewExercise">
            <img
              className="apImg"
              src={`${process.env.PUBLIC_URL}/images/ex.png`}
              alt="myImage"
            ></img>
            <h1>Exercises</h1>
          </a>
        </div>
        <div className="ap-card" style={{ backgroundColor: "#F1C40F" }}>
          <a href="/nutrient" className="ebuttonForap">
            <img
              className="apImg"
              src={`${process.env.PUBLIC_URL}/images/healthy-food.png`}
              alt="myImage"
            ></img>
            <h1>Nutrients</h1>
          </a>
        </div>
        <div className="ap-card" style={{ backgroundColor: "#1E8449" }}>
          <a href="/viewOwners">
            <img
              className="apImg"
              src={`${process.env.PUBLIC_URL}/images/owner.png`}
              alt="myImage"
            ></img>
            <h1>Owners</h1>
          </a>
        </div>
        <div className="ap-card" style={{ backgroundColor: "#2E86C1" }}>
          <a href="/ebook" className="ebuttonForap">
            <img
              className="apImg"
              src={`${process.env.PUBLIC_URL}/images/ebook.png`}
              alt="myImage"
            ></img>
            <h1>E-books</h1>
          </a>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;

/*
useEffect(() => {
    // This function will be called when the component mounts
    // console.log("in enter");
    props.setbgclr(false);
    return () => {
      // This function will be called when the component unmounts
      props.setbgclr(true);
      // console.log("in return");
    };
  }, []);
  return (
    <>
      <div className="back_pic">
        <div className="ahmad_container">
          <div className="exe">
            <a href="./viewExercise" className="anchorTagForADP">
              <img src="/images/fitness.png" alt="Photo_1" />
              <h3> Exercises</h3>
            </a>
          </div>
          <div className="eBooks">
            <a href="/ebook" className="anchorTagForADP">
              <img src="/images/book.gif" alt="Photo_2" />
              <h3>E-books</h3>
            </a>
          </div>
          <div className="owners">
            <a href="/nutrient" className="anchorTagForADP">
              <img src="/images/healthy-food.png" alt="Photo 3" />
              <h3>Nutrients</h3>
            </a>
          </div>
        </div>
      </div>
    </>
*/
