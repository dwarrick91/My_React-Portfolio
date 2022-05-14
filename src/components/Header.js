import React from "react";
import '../styles/Header.css'
import NavTabs from "./NavTabs";
function Header() {
    return (
      <header className="header">
        <h1>Home</h1>
        <NavTabs />
        
      </header>
    );
  }
export default Header;
