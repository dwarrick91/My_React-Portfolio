import React from "react";

export default function Footer() {
    return (
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg class="bi" width="30" height="24"></svg>
          </a>
          <span class="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
        </div>
    
        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">GitHub<a class="text-muted" href="https://github.com/dwarrick91"></a></li>
          <li class="ms-3">Linkend<a class="text-muted" href="#"></a></li>
          <li class="ms-3">Twitter<a class="text-muted" href="#"></a></li>
        </ul>
      </footer>
    )
}