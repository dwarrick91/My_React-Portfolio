import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import apps from "../components/apps";
import Header from "./Header";
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio apps={apps} />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}  />

      {/* // TODO: Add a comment describing what we are passing as props */}
      
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
    </div>
  );
}
