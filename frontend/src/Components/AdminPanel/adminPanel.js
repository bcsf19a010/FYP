import React, { useState, useEffect } from "react";
import "./adminPanel.css";

function AdminPanel(props) {
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
            <a href="./viewExercise">
              <img src="/images/fitness.png" alt="Photo_1" />
              <h3> Exercises</h3>
            </a>
          </div>
          <div className="eBooks">
            <a href="/ebook">
              <img src="/images/book.gif" alt="Photo_2" />
              <h3>E-books</h3>
            </a>
          </div>
          <div className="owners">
            <a href="/nutrient">
              <img src="/images/healthy-food.png" alt="Photo 3" />
              <h3>Nutrients</h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
