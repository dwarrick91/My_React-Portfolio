import React from "react";
import '../styles/Footer.css'
export default function Footer() {
  const footerStyles = {
    position: "sticky",
    background: "#52B7B5",
    width: '100%'
  }
    return (
        <footer className="d-flex flex-wrap  align-items-center py-3 my-4 border-top" style={footerStyles}>
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg className="bi" width="30" height="24"></svg>
          </a>
          
        </div>
    
        <ul className="nav col-md-4  list-unstyled d-flex" style={{fontSize: "40px"}}>
        <a className="text-muted" href="https://github.com/dwarrick91">
          <li className="ms-3"><i className="bi bi-github hoverG"></i></li>
          </a>
          <a className="text-muted"  href="http://linkedin.com/in/david-warrick-424777165">
          <li className="ms-3"><i className="bi bi-linkedin hoverL"></i></li>
          </a>
          <a className="text-muted" href="https://twitter.com/DavidWa15648959">
          <li className="ms-3"><i className="bi bi-twitter hoverT"></i></li>
          </a>
        </ul>
      </footer>
    )
}