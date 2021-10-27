import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

// import "./header.css"

const header = {
  header: {
    color: "black",
    backgroundColor: "white",
    minHeight: "7vh",
  },
  logo: {
    height: "5vh",
    borderRadius: "5px",
  },
  nav: {
    listStyle: "unlisted",
    color: "black",
  },
  li: {
    color: "black",
    fontWeight:"bold",
  },
};
function Header() {
  return (
    <div className="header p-2 d-flex " style={header.header}>
      <img src={logo} className=" px-3 mx-5" style={header.logo} />
      <div style={header.nav} className="offset-7 d-flex justify-content-center align-items-center">
        <NavLink to="/" className="mx-3 text-decoration-none" style={header.li}>
          Home
        </NavLink>
        <NavLink to="/login" className="mx-3 text-decoration-none" style={header.li}>
          Login
        </NavLink>
        <NavLink to="/signup" className="mx-3 text-decoration-none" style={header.li}>
          Signup
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
