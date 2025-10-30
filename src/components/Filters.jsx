import React, { useState, useEffect } from "react";
import "./Filters.css";

const Filters = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [sections, setSections] = useState([
    { title: "Ideal For", isOpen: false },
    { title: "Occasion", isOpen: false },
    { title: "Work", isOpen: false },
    { title: "Fabric", isOpen: false },
    { title: "Segment", isOpen: false },
    { title: "Suitable For", isOpen: false },
    { title: "Raw Materials", isOpen: false },
    { title: "Pattern", isOpen: false },
  ]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsVisible(true);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSection = (index) => {
    const updated = [...sections];
    updated[index].isOpen = !updated[index].isOpen;
    setSections(updated);
  };

  const toggleFilters = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {isMobile && isVisible && (
        <div 
          className="filter-overlay" 
          onClick={toggleFilters}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999
          }}
        />
      )}
      <div className={`filters-container ${isMobile && isVisible ? 'active' : ''}`}>
        <div className="filter-header">
          <h4>Filters</h4>
          <button onClick={toggleFilters}>
            {isVisible ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
        </div>

        {isVisible && (
          <div className="filters">
            {sections.map((section, index) => (
              <div key={index} className="filter-section">
                <p onClick={() => toggleSection(index)} className="filter-title">
                  {section.title}
                </p>
                {section.isOpen && (
                  <div className="filter-options">
                    <label>
                      <input type="checkbox" /> All
                    </label>
                    <label>
                      <input type="checkbox" /> Option 1
                    </label>
                    <label>
                      <input type="checkbox" /> Option 2
                    </label>
                    <label>
                      <input type="checkbox" /> Option 3
                    </label>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Filters;
