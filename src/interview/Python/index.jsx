import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import PythonConcepts from "./Concepts";
import PythonQuestions from "./Questions";

function Python() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center py-8 text-blue-600">Python Interview Preparation</h1>
        
        {/* Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          <Link to="/python/concepts">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors">
              📚 Concepts
            </button>
          </Link>
          <Link to="/python/questions">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors">
              ❓ Questions
            </button>
          </Link>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="concepts/*" element={<PythonConcepts />} />
          <Route path="questions/*" element={<PythonQuestions />} />
          <Route path="*" element={<PythonConcepts />} />
        </Routes>
      </div>
    </div>
  );
}

export default Python;
