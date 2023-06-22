import React, { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

export default function AddGym(props) {
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

  const [gymName, setGymName] = useState("");
  const [gymAddress, setGymAddress] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ownerId = JSON.parse(localStorage.getItem("ownerId"));
    console.log("submitted", gymName, gymAddress, ownerId.ownerId);

    const response = await fetch("/owner/addgym", {
      method: "POST",
      body: JSON.stringify({ gymName, gymAddress, ownerId: ownerId.ownerId }),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (response.ok) {
      localStorage.removeItem("ownerId");
      navigate("/login");
    } else {
      const data = await response.json();
      setError(data.error);
      setTimeout(function () {
        setError("");
      }, 2000);
    }
  };

  return (
    <div style={{ marginBottom: "100px", marginTop: "100px" }}>
      <MDBContainer>
        <div>
          <h3>{error}</h3>
        </div>
        <MDBRow center>
          <MDBCol md="6" className="fcontainer">
            <form
              style={{ padding: "50px" }}
              onSubmit={handleSubmit}
              className="signup-form"
            >
              <div>
                <MDBIcon
                  fas
                  icon="cubes fa-3x me-3"
                  style={{ color: "#ff6219" }}
                />
                <h1 className="text-center">Add Gym Credentials</h1>
              </div>
              <div>
                <MDBInput
                  className="mdb-box"
                  label="Gym Name"
                  placeholder="Enter Gym Name"
                  type="tel"
                  value={gymName}
                  onChange={(e) => setGymName(e.target.value)}
                  required
                />
                <MDBInput
                  className="mdb-box"
                  label="Gym Address"
                  placeholder="Enter Gym Address"
                  type="textarea"
                  rows="4"
                  value={gymAddress}
                  onChange={(e) => setGymAddress(e.target.value)}
                  required
                />

                <div className="text-center">
                  <MDBBtn className="mdb-box" color="primary" type="submit">
                    Add Gym
                  </MDBBtn>
                </div>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
