import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Concept1 from "./Concept1";
import Concept2 from "./Concept2";
import Concept3 from "./Concept3";
import Concept4 from "./Concept4";
import Concept5 from "./Concept5";
import Concept6 from "./Concept6";
import Concept7 from "./Concept7";
import Concept8 from "./Concept8";

function ReactConcepts() {
  const [activeTab, setActiveTab] = useState("concept1");

  const tabs = {
    concept1: "Hooks",
    concept2: "State Management",
    concept3: "Performance Optimization",
    concept4: "Debouncing",
    concept5: "React Query (useQuery)",
    concept6: "Forms (useState vs useRef)",
    concept7: "Search Filter",
    concept8: "Redux",
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">React - Concepts</h1>

      {/* Tab buttons */}
      <div className="mb-6 flex flex-wrap gap-2">
        {Object.keys(tabs).map((tab) => (
          <Link key={tab} to={`/react/concepts/${tab}`}>
            <button
              onClick={() => handleTabChange(tab)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tabs[tab]}
            </button>
          </Link>
        ))}
      </div>

      {/* Routes for displaying content of each concept */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <Routes>
          <Route path="concept1" element={<Concept1 />} />
          <Route path="concept2" element={<Concept2 />} />
          <Route path="concept3" element={<Concept3 />} />
          <Route path="concept4" element={<Concept4 />} />
          <Route path="concept5" element={<Concept5 />} />
          <Route path="concept6" element={<Concept6 />} />
          <Route path="concept7" element={<Concept7 />} />
          <Route path="concept8" element={<Concept8 />} />
          <Route path="*" element={<Concept1 />} />
        </Routes>
      </div>
    </div>
  );
}

export default ReactConcepts;
