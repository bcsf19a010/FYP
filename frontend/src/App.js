import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

//import Workouts from "./Components/Workout/Workouts";
import Navbar from "./Components/Navbar";
import About from "./Components/About/about";
//import Login from "./Components/Login/Login";
import Signup from "./Components/SignUp/Signup";
import Login from "./Components/Login_f/Login";
import Clone from "./Components/Clone/Clone";
import Footer from "./Components/footer";
import Home from "./Components/Home/Home";
import UserPanel from "./Components/UserPanel/UserPanel";
import "./app.css";
import { useEffect } from "react";
import VideoPlayer from "./Components/videoPlayer/videopage";

function App() {
  const [bgclr, setbgclr] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    // Set the initial background image based on the initial value of the bgclr prop
    setBackgroundImage(
      bgclr
        ? "linear-gradient(#F5F5F5, #F5F5F5)"
        : "linear-gradient(#b92b27, #1565c0)"
    );
  }, [bgclr]);

  //const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="App" style={{ backgroundImage }}>
      <BrowserRouter>
        <Routes>
          {/* <Route
            path="/workouts"
            element={
              user ? (
                [<Navbar username={user.username} />, <Workouts />]
              ) : (
                <Navigate to={"/"} />
              )
            }
          /> */}
          <Route
            path="/about"
            element={[<Navbar />, <About />, <Footer />]}
            // element={user ? [<Navbar />, <About />] : <Navigate to={"/"} />}
          />
          <Route path="/" element={[<Navbar />, <UserPanel />, <Footer />]} />
          <Route
            path="/video"
            element={[
              <Navbar />,
              <VideoPlayer videoPath="videos/PushUps.mp4" />,
              <Footer />,
            ]}
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/humanClone"
            element={[<Navbar />, <Clone />, <Footer />]}
          />
          <Route
            path="/login"
            element={[<Navbar />, <Login setbgclr={setbgclr} />, <Footer />]}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
