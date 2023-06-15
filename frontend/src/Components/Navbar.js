import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const type = JSON.parse(localStorage.getItem("type"));
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("type");
    navigate("/");
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-light"
      style={{ padding: "0px", width: "100%" }}
    >
      <div
        className="container-fluid"
        style={{ backgroundColor: "black", paddingTop: "30px" }}
      >
        <Link className="navbar-brand text-dark" to="/">
          <img src="images/logo.png" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {user && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "25px",
                  }}
                  className="nav-link"
                  aria-current="page"
                  to={
                    type && type.type === "user" ? "/userpanel" : "/adminpanel"
                  }
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "25px",
                  }}
                  className="nav-link"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "25px",
                  }}
                  className="nav-link"
                  aria-current="page"
                  to="/calNutrient"
                >
                  Nutrients
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "25px",
                  }}
                  className="nav-link"
                  aria-current="page"
                  to="/humanClone"
                >
                  Human Clone
                </Link>
              </li>
            </ul>
          )}
          <i className="mx-3">
            <strong>{props.username}</strong>
          </i>
          {user && (
            <form onSubmit={logout}>
              <button className="btn btn-outline-danger" type="submit">
                Logout
              </button>
            </form>
          )}
          {/* {!user && (
            <form>
              <button
                className="btn btn-outline-danger"
                type="submit"
                onClick={<Navigate to={"/"} />}
              >
                Login
              </button>
            </form>
          )} */}
        </div>
      </div>
    </nav>

    /* {<div className="Navbar">
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand text-dark" to="/">
              Navbar
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link  text-dark"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            { <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> }
          </div>
        </nav>
      </div>
    </> }*/
  );
}
