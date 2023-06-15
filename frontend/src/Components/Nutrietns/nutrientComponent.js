// import React from 'react';

import React from "react";
//import "./Exercise.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

export default function Nutrients() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("/admin/getNutrients");
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData); // Update state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetch data function when the component mounts
  }, []);
  // delete data.....

  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = async (event) => {
    try {
      // Make an API call to delete the data
      console.log("id", event.target.id);
      await axios.delete(`/admin/deleteExercise/${event.target.id}`);
      // Perform any additional actions or update the state as needed
      setIsDeleting(true);
      setMessage("Data deleted successfully!");
      // Fetch the updated data from the API
      const response = await fetch("/admin/getExercises");
      const jsonData = await response.json();
      setData(jsonData); // Update state with the fetched data
    } catch (error) {
      console.error("Error deleting data:", error);
      // Handle error condition
    } finally {
      setIsDeleting(false);
      setTimeout(function () {
        setMessage("");
      }, 2000);
    }
  };

  return (
    <div className="Exercise">
      <p style={{ textAlign: "center" }}>{message}</p>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <a href="/addNutrient">
          <MDBBtn className="me-1" rounded size="sm">
            Add
          </MDBBtn>
        </a>
      </div>
      <MDBTable className="m-4" style={{ width: "80%" }}>
        <MDBTableHead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Calories</th>
            <th scope="col">Protien</th>
            <th scope="col">Carbohydrate</th>
            <th scope="col">Sugar</th>
            <th scope="col">Fiber</th>
            <th scope="col">Vitamins</th>

            <th scope="col">Delete</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {data.map((item) => (
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <div className="ms-3">
                    <p className="fw-bold mb-1">
                      <div key={item._id}>{item.name}</div>
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">
                  <div key={item._id}>{item.calories}</div>
                </p>
              </td>

              <td>
                <p className="fw-normal mb-1">
                  <div key={item._id}>{item.protein}</div>
                </p>
              </td>

              <td>
                <p className="fw-normal mb-1">
                  <div key={item._id}>{item.carbohydrates}</div>
                </p>
              </td>

              <td>
                <p className="fw-normal mb-1">
                  <div key={item._id}>{item.sugar}</div>
                </p>
              </td>
              <td>
                <p className="fw-normal mb-1">
                  <div key={item._id}>{item.fiber}</div>
                </p>
              </td>
              <td>
                <p className="fw-normal mb-1">
                  <div key={item._id}>{item.vitamins}</div>
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
                  {/* {isDeleting ? 'Deleting...' : 'Delete'} */}
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
