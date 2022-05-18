import React, { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import apps from "../components/apps";
import Header from "./Header";
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");


  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio apps={apps} />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}  />

      
      {renderPage()}
    </div>
  );
}
