import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a
        className="nav-link"
          href="#about"
          onClick={() => handlePageChange('About')}
          //  TODO: Add a comment explaining what this logic is doing

         
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
        className="nav-link"
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          //  TODO: Add a comment explaining what this logic is doing

         
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
        className="nav-link"
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange('Contact')}
         
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
        className="nav-link"
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
