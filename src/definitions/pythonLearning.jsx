import React, { useState } from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";
import Day1 from "../pythonbeginners/day1"; 
import Day2 from "../pythonbeginners/day2"; 
import Day3 from "../pythonbeginners/day3"; 
import Day4 from "../pythonbeginners/day4"; 
import Day5 from "../pythonbeginners/day5";

function PythonLearning() {
  const [activeTab, setActiveTab] = useState("beginners"); // Default tab is 'beginners'

  const tabs = {
    beginners: "Beginners",
    intermediate: "Intermediate",
    advance: "Advanced",
  };

  const days = Array.from({ length: 24 }, (_, i) => i + 1); // Creates an array [1, 2, ..., 10]

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-xl font-bold mb-4">Python Learning - {tabs[activeTab]}</h1>

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

      {/* Day links */}
      <div className="grid grid-cols-12  grid-rows-1 gap-1">
        {days.map((day) => (
          <div key={day}>
            <Link to={`/pythonLearning/${activeTab}/day${day}`}>
              <button className="bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Day {day}
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Routes for displaying content of each day */}
      <Routes>
        {days.map((day) => (
          <Route
            key={day}
            path={`${activeTab}/day${day}`}
            element={<DayComponent day={day} tab={activeTab} />}
          />
        ))}
      </Routes>
    </div>
  );
}

// DayComponent to display content based on day and tab
function DayComponent({ day, tab }) {
  const { dayParam } = useParams(); // Capture URL params

  // Conditionally render Day1 for Beginners Day 1
  if (tab === "beginners" && day === 1) {
    return <Day1 />; 
  }
  else if (tab === "beginners" && day === 2) {
    return <Day2 />; 
  }
  else if (tab === "beginners" && day === 3) {
    return <Day3 />; 
  }
  else if (tab === "beginners" && day === 4) {
    return <Day4 />; 
  }
  else if (tab === "beginners" && day === 5) {
    return <Day5 />; 
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2 className="text-lg font-semibold">
        Content for {tab.charAt(0).toUpperCase() + tab.slice(1)} - Day {day}
      </h2>
      <p>
        {/* General content for all other days */}
        This is the content for Day {day} in the {tab} level.
      </p>
    </div>
  );
}

export default PythonLearning;
