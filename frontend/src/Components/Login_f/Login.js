import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "@fortawesome/fontawesome-free/css/all.css";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const userData = JSON.parse(localStorage.getItem("user"));

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

  const navigate = useNavigate();

  const loginRoute = (data) => {
    console.log("id", data.ownerId);
    if (data.accountType === "User") {
      localStorage.setItem("type", JSON.stringify({ type: "user" }));
      navigate("/userpanel");
    } else if (data.accountType === "Admin") {
      localStorage.setItem("type", JSON.stringify({ type: "admin" }));
      navigate("/adminpanel");
    } else if (data.accountType === "Owner") {
      localStorage.setItem(
        "ownerId",
        JSON.stringify({ ownerId: data.ownerId })
      );
      localStorage.setItem("type", JSON.stringify({ type: "owner" }));
      navigate("/ownerpanel");
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    if (email && password) {
      const response = await fetch("/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-type": "application/json",
        },
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem(
          "user",
          JSON.stringify({ username: data.username })
        );
        console.log("data is", data);
        setEmail("");
        setPassword("");
        loginRoute(data);
      } else {
        setError(data.error);
        if (data.error === "Incorrect Password") {
          setPassword("");
        } else {
          setEmail("");
          setPassword("");
        }
        setTimeout(function () {
          setError("");
        }, 2000);

        console.log("error\n", data.error);
      }
    } else {
      alert("Empty");
    }
  };

  if (userData) {
    navigate("/userpanel");
  } else {
    return (
      <div className="login-page">
        <MDBContainer className="container my-5" style={{ maxWidth: "900px" }}>
          <MDBCard>
            <h1 style={{ textAlign: "center", color: "red" }}>{error}</h1>
            <MDBRow className="g-0">
              <MDBCol md="6">
                <MDBCardImage
                  style={{
                    marginTop: "-9px",
                    marginLeft: "-1px",
                    marginBottom: "-2px",
                  }}
                  src={"images/login_image.jpg"}
                  alt="login form"
                  className="rounded-start w-100"
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBCardBody className="d-flex flex-column">
                  <div className="d-flex flex-row mt-2">
                    <MDBIcon
                      fas
                      icon="cubes fa-3x me-3"
                      style={{ color: "#ff6219" }}
                    />
                    <span className="h1 fw-bold mb-0">Login</span>
                  </div>

                  <h5
                    className="fw-normal my-4 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    Sign into your account
                  </h5>
                  <form onSubmit={submit}>
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Email address"
                      placeholder="Enter Email"
                      // id="formControlLg"
                      type="email"
                      size="lg"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Password"
                      placeholder="Enter Password"
                      // id="formControlLg"
                      type="password"
                      size="lg"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />

                    <MDBBtn
                      className="mb-4 px-5"
                      color="dark"
                      size="lg"
                      type="submit"
                      //onClick={() => alert("Button clicked!")}
                    >
                      Login
                    </MDBBtn>
                  </form>
                  <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                    Don't have an account?{" "}
                    <a href="/signup" style={{ color: "#393f81" }}>
                      Register here
                    </a>
                  </p>

                  {/* <div className="d-flex flex-row justify-content-start">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted">
                  Privacy policy
                </a>
              </div> */}
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBContainer>
      </div>
    );
  }
}

// import React from "react";
// import adminImage from "../../Resources/images/admin.png";
// import userImage from "../../Resources/images/user.png";
// import ownerImage from "../../Resources/images/owner.png";

// export default function Home() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <img src={adminImage} alt="icon 1" style={{ marginRight: "20px" }} />
//       <img src={ownerImage} alt="icon 2" style={{ marginRight: "20px" }} />
//       <img src={userImage} alt="icon 3" />
//     </div>
//   );
// }
