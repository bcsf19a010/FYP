import React, { useState, useEffect } from "react";
import "./adminPanel.css";

function AdminPanel() {
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
            <a href="#">
              <img src="/images/book.gif" alt="Photo_2" />
              <h3>E-books</h3>
            </a>
          </div>
          <div className="owners">
            <a href="#">
              <img src="/images/boss.png" alt="Photo 3" />
              <h3>Owners</h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPanel;
