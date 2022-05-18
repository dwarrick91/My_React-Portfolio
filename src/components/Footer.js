import React from "react";

export default function Footer() {
  const footerStyles = {
    position: "sticky",
    background: "#52B7B5",
    width: '100%'
  }
    return (
        <footer class="d-flex flex-wrap  align-items-center py-3 my-4 border-top" style={footerStyles}>
        <div class="col-md-4 d-flex align-items-center">
          <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg class="bi" width="30" height="24"></svg>
          </a>
          
        </div>
    
        <ul class="nav col-md-4  list-unstyled d-flex" style={{fontSize: "40px"}}>
        <a class="text-muted" href="https://github.com/dwarrick91">
          <li class="ms-3"><i class="bi bi-github"></i></li>
          </a>
          <a class="text-muted"  href="http://linkedin.com/in/david-warrick-424777165">
          <li class="ms-3"><i class="bi bi-linkedin"></i></li>
          </a>
          <a class="text-muted" href="https://twitter.com/DavidWa15648959">
          <li class="ms-3"><i class="bi bi-twitter"></i></li>
          </a>
        </ul>
      </footer>
    )
}