import React from "react";
import "../styles/NavTabs.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav justify-content-end ">
      <li className="nav-item">
        <a
          className="nav-link"
          href="#about"
          onClick={() => handlePageChange("About")}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="#contact"
          onClick={() => handlePageChange("Contact")}
        >
          Contact
        </a>
      </li>
      <li className="nav-item" >
        <a
          className="nav-link"
          href="#resume"
          onClick={() => handlePageChange("Resume" )}
         
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
