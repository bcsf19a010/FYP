import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

export default function ViewOwner() {
  const [gymOwners, setGymOwners] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchGymOwners = async () => {
      try {
        const response = await axios.get("/admin/viewOwners");
        setGymOwners(response.data);
      } catch (error) {
        console.error("Error fetching gym owners:", error);
      }
    };

    fetchGymOwners();
  }, []);

  const handleDelete = async (id) => {
    try {
      setIsDeleting(true);
      await axios.delete(`/admin/deleteGymOwner/${id}`);
      setMessage("Gym owner deleted successfully!");

      // Fetch the updated list of gym owners
      const response = await axios.get("/admin/viewOwners");
      setGymOwners(response.data);
    } catch (error) {
      console.error("Error deleting gym owner:", error);
      // Handle error condition
    } finally {
      setIsDeleting(false);
      setTimeout(function () {
        setMessage("");
      }, 2000);
    }
  };

  return (
    <div className="GymOwnerComponent">
      <p style={{ textAlign: "center" }}>{message}</p>

      <MDBTable className="m-4" style={{ width: "80%" }}>
        <MDBTableHead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Address</th>
            <th scope="col">Delete</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {gymOwners.map((gymOwner) => (
            <tr key={gymOwner._id}>
              <td>{gymOwner.username}</td>
              <td>{gymOwner.email}</td>
              <td>{gymOwner.phoneNo}</td>
              <td>{gymOwner.address}</td>
              <td>
                <MDBBtn
                  id={gymOwner._id}
                  className="me-1"
                  color="danger"
                  rounded
                  size="sm"
                  onClick={() => handleDelete(gymOwner._id)}
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
