import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
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
        <div
          className="collapse navbar-collapse img"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active m-3 active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active m-3" href="#">
                Clean Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active m-3" href="#">
                Review
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active m-3" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active m-3" href="#">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active m-3" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
