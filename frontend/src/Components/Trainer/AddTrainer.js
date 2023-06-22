import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";

const AddTrainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    address: "",
    fee: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const owner = JSON.parse(localStorage.getItem("ownerId"));
  console.log("owenr is", owner);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("name", formData.name);
    fd.append("email", formData.email);
    fd.append("phoneNo", formData.phoneNo);
    fd.append("address", formData.address);
    fd.append("fee", formData.fee);
    fd.append("owner", owner.ownerId);

    const response = await fetch("/owner/addTrainer", {
      method: "POST",
      body: fd,
    });
    if (response.ok) {
      //const data = await response.json();
      setMessage("Trainer added successfully!");
      setTimeout(() => {
        setMessage("");
      }, 2000);
      // Perform any additional actions or handle the response as needed
    } else {
      setMessage("Failed to add Trainer");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
    // setFormData({
    //   name: "",
    //   email: "",
    //   phoneNo: "",
    //   address: "",
    //   fee: "",
    // });

    // Reset the form
    setFormData({
      name: "",
      email: "",
      phoneNo: "",
      address: "",
      fee: "",
    });
  };

  return (
    <MDBContainer style={{ marginTop: "50px" }}>
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
            <h1 style={{ textAlign: "center" }}>Add Trainer</h1>
            <MDBInput
              label="Name"
              id="name"
              name="name"
              type="text"
              value={formData.name}
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

            <MDBInput
              label="Fee"
              id="fee"
              name="fee"
              type="number"
              value={formData.fee}
              onChange={handleChange}
              required
            />

            <MDBBtn color="primary" type="submit" style={{ width: "100%" }}>
              Submit
            </MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AddTrainer;
