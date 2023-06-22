import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

export default function ViewTrainer() {
  const [trainers, setTrainers] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [message, setMessage] = useState("");

  const owner = JSON.parse(localStorage.getItem("ownerId")).ownerId;

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get(`/owner/viewTrainer/${owner}`);
        console.log("data is", response.data.result);
        setTrainers(response.data.result);
      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    };

    fetchTrainers();
  }, []);

  const handleDelete = async (id) => {
    try {
      setIsDeleting(true);
      await axios.delete(`/owner/deleteTrainer/${id}`);
      setMessage("Trainer deleted successfully!");

      // Fetch the updated list of trainers
      const response = await axios.get(`/owner/viewTrainer/${owner}`);
      setTrainers(response.data.result);
    } catch (error) {
      console.error("Error deleting trainer:", error);
      // Handle error condition
    } finally {
      setIsDeleting(false);
      setTimeout(function () {
        setMessage("");
      }, 2000);
    }
  };

  return (
    <div className="TrainerComponent">
      <p style={{ textAlign: "center" }}>{message}</p>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <a href="/addTrainer">
          <MDBBtn className="me-1" rounded size="sm">
            Add Trainer
          </MDBBtn>
        </a>
      </div>
      <MDBTable className="m-4" style={{ width: "80%" }}>
        <MDBTableHead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Address</th>
            <th scope="col">Fee</th>
            <th scope="col">Delete</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {trainers.map((trainer) => (
            <tr key={trainer._id}>
              <td>{trainer.name}</td>
              <td>{trainer.email}</td>
              <td>{trainer.phoneNo}</td>
              <td>{trainer.address}</td>
              <td>{trainer.fee}</td>
              <td>
                <MDBBtn
                  id={trainer._id}
                  className="me-1"
                  color="danger"
                  rounded
                  size="sm"
                  onClick={() => handleDelete(trainer._id)}
                  disabled={isDeleting}
                >
                  Delete
                </MDBBtn>
              </td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}
