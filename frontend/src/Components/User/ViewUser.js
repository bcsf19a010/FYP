import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

export default function ViewUser() {
  const [users, setUsers] = useState([]);
  //const [attendanceStatus, setAttendanceStatus] = useState("P");
  const [isDeleting, setIsDeleting] = useState(false);
  const [message, setMessage] = useState("");

  const owner = JSON.parse(localStorage.getItem("ownerId")).ownerId;

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`/owner/viewUser/${owner}`);
      console.log(response.data.result);
      setUsers(response.data.result);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //   const handleAttendanceSubmit = async () => {
  //     try {
  //       await axios.post("/attendance", { attendanceStatus });
  //       setMessage("Attendance submitted successfully!");
  //       setAttendanceStatus("P"); // Reset attendance status to default value after submission
  //     } catch (error) {
  //       console.error("Error submitting attendance:", error);
  //       // Handle error condition
  //     }
  //   };

  const handleDelete = async (id) => {
    try {
      setIsDeleting(true);
      await axios.delete(`/owner/deleteUser/${id}`);
      setMessage("User deleted successfully!");

      // Fetch the updated list of users
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
      // Handle error condition
    } finally {
      setIsDeleting(false);
      setTimeout(function () {
        setMessage("");
      }, 2000);
    }
  };

  return (
    <div className="UserComponent">
      <p style={{ textAlign: "center" }}>{message}</p>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <a href="/addUser">
          <MDBBtn className="me-1" rounded size="sm">
            Add User
          </MDBBtn>
        </a>
        <MDBBtn className="me-1" rounded size="sm">
          Mark Attendance
        </MDBBtn>
      </div>
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
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phoneNo}</td>
              <td>{user.address}</td>

              <td>
                <MDBBtn
                  id={user._id}
                  className="me-1"
                  color="danger"
                  rounded
                  size="sm"
                  onClick={() => handleDelete(user._id)}
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
