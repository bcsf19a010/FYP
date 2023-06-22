import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

export default function Exercise() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/admin/getExercises");
        const jsonData = await response.json();
        setData(jsonData);
        console.log("exercise json data", jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (e) => {
    try {
      console.log("id", e.target.id);
      await axios.delete(`/admin/deleteExercise/${e.target.id}`);

      setIsDeleting(true);
      setMessage("Data deleted successfully!");

      const response = await fetch("/admin/getExercises");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error deleting data:", error);
    } finally {
      setIsDeleting(false);
      setTimeout(function () {
        setMessage("");
      }, 2000);
    }
  };

  return (
    <div>
      <p style={{ textAlign: "center" }}>{message}</p>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <a href="/addexercise">
          <MDBBtn className="me-1" rounded size="sm">
            Add
          </MDBBtn>
        </a>
      </div>
      <MDBTable className="m-4" style={{ width: "80%" }}>
        <MDBTableHead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Title</th>
            <th scope="col">Delete</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>
                <div className="d-flex align-items-center">
                  <div className="ms-3">
                    <p key={item._id} className="fw-bold mb-1">
                      {item.name}
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p key={item._id} className="fw-normal mb-1">
                  {item.bodyPart}
                </p>
              </td>
              <td>
                <MDBBtn
                  id={item._id}
                  className="me-1"
                  color="danger"
                  rounded
                  size="sm"
                  onClick={handleDelete}
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
