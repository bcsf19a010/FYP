import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import Workouts from "./Components/Workout/Workouts";
import Navbar from "./Components/Navbar";
import About from "./Components/about";
//import Login from "./Components/Login/Login";
import Signup from "./Components/SignUp/Signup";
import Login from "./Components/Login_f/Login";
import Clone from "./Components/Clone/Clone";
import Footer from "./Components/footer";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="App container-fluid">
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
            element={[<Navbar />, <About />]}
            // element={user ? [<Navbar />, <About />] : <Navigate to={"/"} />}
          />
          <Route path="/" element={[<Navbar />, <Login />, <Footer />]} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/humanClone" element={[<Navbar />, <Clone />]} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
