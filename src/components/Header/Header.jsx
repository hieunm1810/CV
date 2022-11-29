import React from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
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
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active --home"
                  aria-current="page"
                  to={"/"}
                >
                  <i className="fa-solid fa-house"></i>
                </NavLink>
              </li>
              <li className="nav-item d-flex align-items-center">
                <NavLink className="nav-link" to={"/resume"}>
                  RESUME
                </NavLink>
              </li>
              <li className="nav-item d-flex align-items-center">
                <NavLink className="nav-link" to={"/porfolio"}>
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
            <div className="header__social d-flex align-items-center">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin-in"></i>
              <button className="header__CTA d-flex align-items-center">
                Hire Me
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
