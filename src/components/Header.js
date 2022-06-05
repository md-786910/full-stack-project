import React from "react";
import { NavLink } from "react-router-dom";
import { VscAdd } from "react-icons/vsc";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{ backgroundColor: "whitesmoke" }}
    >
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavLink
          to="/"
          className="navbar-brand fw-bold"
          style={{ color: "green", fontSize: "25px" }}
        >
          Develop API
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link  active"
                aria-current="page"
                style={{ fontSize: "18px" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/api/dashboard"
                className="nav-link "
                href="#"
                style={{ fontSize: "18px" }}
              >
                Dashboard
              </NavLink>
            </li>
            <li
              className="nav-item"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="create a new api"
            >
              <NavLink
                to="/api/create"
                className="nav-link"
                style={{ fontSize: "18px" }}
                activeClassName="selected"
              >
                <VscAdd />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
