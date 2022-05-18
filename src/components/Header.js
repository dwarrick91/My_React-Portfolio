import React from "react";
import '../styles/Header.css'
import NavTabs from "./NavTabs";
function Header({currentPage, handlePageChange}) {
    return (
      <header className="header">
        <h1>David Warrick</h1>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        
      </header>
    );
  }
export default Header;
