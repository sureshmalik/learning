import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import ReactConcepts from "./Concepts";
import ReactQuestions from "./Questions";

function ReactInterview() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center py-8 text-cyan-600">React Interview Preparation</h1>
        
        {/* Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          <Link to="/react/concepts">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors">
              📚 Concepts
            </button>
          </Link>
          <Link to="/react/questions">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors">
              ❓ Questions
            </button>
          </Link>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="concepts/*" element={<ReactConcepts />} />
          <Route path="questions/*" element={<ReactQuestions />} />
          <Route path="*" element={<ReactConcepts />} />
        </Routes>
      </div>
    </div>
  );
}

export default ReactInterview;
