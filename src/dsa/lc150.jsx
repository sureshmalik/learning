import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Array1 from "./arrays/array1";

function LC150() {
  const [activeTab, setActiveTab] = useState("array");

  const tabs = {
    array: "Array",
    hashmap: "Hashmap",
    twoDimensionalArray: "2D Array",
  };

  const problems = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-xl font-bold mb-4">LC150 - {tabs[activeTab]}</h1>

      {/* Tab buttons */}
      <div className="mb-4">
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`bg-gray-200 px-4 py-2 m-2 rounded ${
              activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {tabs[tab]}
          </button>
        ))}
      </div>

      {/* Problem links */}
      <div className="grid grid-cols-5 gap-4">
        {problems.map((problem) => (
          <div key={problem}>
            <Link to={`/LC150/${activeTab}/problem${problem}`}>
              <button className="bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Problem {problem}
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Routes for problems */}
      <Routes>
        {problems.map((problem) => (
          <Route
            key={problem}
            path={`${activeTab}/problem${problem}`}
            element={<ProblemComponent tab={activeTab} problem={problem} />}
          />
        ))}
      </Routes>
    </div>
  );
}

// Component to display each problem
function ProblemComponent({ tab, problem }) {
    // const { problemParam } = useParams(); // Capture URL params

    // Conditionally render Day1 for Beginners Day 1
    if (tab === "array" && problem === 1) {
      return <Array1 />; 
    }

  return (
    <div>
      <h2 className="text-lg font-semibold">
        {tab.charAt(0).toUpperCase() + tab.slice(1)} - Problem {problem}
      </h2>
      <p>This is the content for {tab} problem {problem}.</p>
    </div>
  );
}

export default LC150;
