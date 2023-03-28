import React from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light  navbar-dark bg-dark">
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">
                Add Task
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
