// import React from 'react';

import React from "react";
import "./Exercise.css";
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

export default function Exercise() {
  return (
    <div className="Exercise">
      <MDBTable className="m-4">
        <MDBTableHead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Title</th>
            <th scope="col">Add</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <div className="ms-3">
                  <p className="fw-bold mb-1">John Doe</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">Chest</p>
            </td>
            <td>
              <MDBBtn className="me-1" rounded size="sm">
                Add
              </MDBBtn>
            </td>
            <td>
              <MDBBtn className="me-1" color="danger" rounded size="sm">
                Delete
              </MDBBtn>
            </td>
            <td>
              <MDBBtn className="me-1" color="warning" rounded size="sm">
                UPdate
              </MDBBtn>
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}
