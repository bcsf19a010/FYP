import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";

const AddUser = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNo: "",
    address: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const owner = JSON.parse(localStorage.getItem("ownerId"));
    console.log("owenr is", owner);

    const fd = new FormData();
    fd.append("username", formData.username);
    fd.append("email", formData.email);
    fd.append("password", formData.password);
    fd.append("phoneNo", formData.phoneNo);
    fd.append("address", formData.address);
    fd.append("owner", owner.ownerId);

    const response = await fetch("/owner/addUser", {
      method: "POST",
      body: fd,
    });
    if (response.ok) {
      //const data = await response.json();

      setMessage("User added successfully!");
      setTimeout(() => {
        setMessage("");
      }, 2000);

      // Perform any additional actions or handle the response as needed
    } else {
      setMessage("Failed to add User");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }

    // Reset the form
    setFormData({
      username: "",
      email: "",
      password: "",
      phoneNo: "",
      address: "",
    });
  };

  return (
    <MDBContainer>
      <h5 style={{ textAlign: "center" }}>{message}</h5>
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <form
            onSubmit={handleSubmit}
            style={{
              border: "2px solid black",
              backgroundColor: "white",
              padding: "20px",
            }}
            className="m-4"
          >
            {" "}
            <h1 style={{ textAlign: "center" }}>Add User</h1>
            <MDBInput
              label="Username"
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <MDBInput
              label="Email"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <MDBInput
              label="Password"
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <MDBInput
              label="Phone Number"
              id="phoneNo"
              name="phoneNo"
              type="text"
              value={formData.phoneNo}
              onChange={handleChange}
              required
            />
            <MDBInput
              label="Address"
              id="address"
              name="address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <MDBBtn color="primary" type="submit">
              Submit
            </MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AddUser;
