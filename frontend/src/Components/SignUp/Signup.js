import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./signup.css";

const SignUp = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [userType, setUserType] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // This function will be called when the component mounts
    props.setbgclr(false);
    return () => {
      // This function will be called when the component unmounts
      props.setbgclr(true);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username && email && password && phoneNo && address && userType) {
      if (userType === "user") {
        const response = await fetch("/user/signup", {
          method: "POST",
          body: JSON.stringify({ username, email, password, phoneNo, address }),
          headers: {
            "Content-type": "application/json",
          },
        });
        // const data = await response.json();
        if (response.ok) {
          navigate("/login");
        } else {
          const data = await response.json();
          setError(data.error);
          setAddress("");
          setEmail("");
          setPassword("");
          setPhoneNo("");
          setUserType("");
          setUsername("");
          setTimeout(function () {
            setError("");
          }, 2000);
        }
      } else if (userType === "owner") {
        const response = await fetch("/owner/signup", {
          method: "POST",
          body: JSON.stringify({ username, email, password, phoneNo, address }),
          headers: {
            "Content-type": "application/json",
          },
        });
        if (response.ok) {
          navigate("/login");
        } else {
          const data = await response.json();
          setError(data.error);
          setAddress("");
          setEmail("");
          setPassword("");
          setPhoneNo("");
          setUserType("");
          setUsername("");
          setTimeout(function () {
            setError("");
          }, 2000);
        }
      }

      // } else {
      //   alert(error);
      // }
    }
  };
  return (
    <div className="signup-container">
      <MDBContainer>
        <h4>{error}</h4>
        <MDBRow center>
          <MDBCol md="6" className="fcontainer">
            <form onSubmit={handleSubmit} className="signup-form">
              <div className="signup-image">
                <div>
                  <MDBIcon
                    fas
                    icon="cubes fa-3x me-3"
                    style={{ color: "#ff6219" }}
                  />
                  <h1 className="text-center">Sign Up</h1>
                </div>
              </div>
              <div className="sform">
                <MDBInput
                  className="mdb-box"
                  label="Username"
                  placeholder="Enter UserName"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <MDBInput
                  className="mdb-box"
                  label="Email"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <MDBInput
                  className="mdb-box"
                  label="Password"
                  placeholder="Enter Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <MDBInput
                  className="mdb-box"
                  label="Phone Number"
                  placeholder="Enter Phone No."
                  type="tel"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  required
                />
                <MDBInput
                  className="mdb-box"
                  label="Address"
                  placeholder="Enter Address"
                  type="textarea"
                  rows="4"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
                <div className="radio-buttons">
                  <label>Which account are you Creating? </label>
                  <label>
                    <input
                      type="radio"
                      name="user-type"
                      value="user"
                      checked={userType === "user"}
                      onChange={(e) => setUserType(e.target.value)}
                      required
                    />
                    User
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="user-type"
                      value="owner"
                      checked={userType === "owner"}
                      onChange={(e) => setUserType(e.target.value)}
                      required
                    />
                    Owner
                  </label>
                </div>
                <div className="text-center">
                  <MDBBtn className="mdb-box" color="primary" type="submit">
                    Sign Up
                  </MDBBtn>
                </div>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default SignUp;

// import React, { useState } from "react";
// import { Link, Navigate } from "react-router-dom";
// import { setInitials } from "../Login/loginSlice";
// import { useDispatch } from "react-redux";

// export default function Signup() {
//   const dispatch = useDispatch();
//   const user = JSON.parse(localStorage.getItem("user"));
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   if (!user) {
//     const submit = async (e) => {
//       e.preventDefault();
//       if (username && email && password) {
//         const response = await fetch("/user/signup", {
//           method: "POST",
//           body: JSON.stringify({ username, email, password }),
//           headers: {
//             "Content-type": "application/json",
//           },
//         });
//         console.log("response\n\n", response);

//         const data = await response.json();
//         if (response.ok) {
//           dispatch(setInitials(data));
//         } else {
//           setError(data.error);
//           setTimeout(() => {
//             setError("");
//           }, 1500);
//           console.log("error\n", data.error);
//         }
//         setUsername("");
//         setEmail("");
//         setPassword("");
//       }
//     };

//     return (
//       <div className="container  py-5">
//         <div className="row d-flex justify-content-center align-items-center h-100">
//           <div className="col col-lg-10 col-xl-5">
//             <div className="card rounded-3 py-4 ">
//               <div className="card-body py-4 ">
//                 <h1 className="text-center" style={{ color: "black" }}>
//                   Sign Up
//                 </h1>
//                 <form onSubmit={submit}>
//                   <span style={{ color: "red" }}>{error}</span>
//                   <div className="container form-group">
//                     <label>
//                       <strong>Username</strong>
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="username"
//                       aria-describedby="emailHelp"
//                       placeholder="Enter Username here"
//                       value={username}
//                       onChange={(e) => {
//                         setUsername(e.target.value);
//                       }}
//                     />
//                   </div>
//                   <div className="container form-group my-3">
//                     <label>
//                       <strong>Email address</strong>
//                     </label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="email"
//                       aria-describedby="emailHelp"
//                       placeholder="Enter email"
//                       value={email}
//                       onChange={(e) => {
//                         setEmail(e.target.value);
//                       }}
//                     />
//                   </div>
//                   <div className="container form-group my-3">
//                     <label>
//                       <strong>Password</strong>
//                     </label>

//                     <input
//                       type="password"
//                       className="form-control mb-3"
//                       id="password"
//                       placeholder="Password"
//                       value={password}
//                       onChange={(e) => {
//                         setPassword(e.target.value);
//                       }}
//                     />
//                   </div>
//                   <button className="btn btn-primary my-3">Submit</button>
//                 </form>
//                 <div className="text-center">
//                   Have an account? <Link to={"/"}>Login</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   } else {
//     return <Navigate to={"/"} />;
//   }
// }
