import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";

function ReactQuestions() {
  const [activeTab, setActiveTab] = useState(1);

  // Generate 100 questions
  const totalQuestions = 100;
  const questions = Array.from({ length: totalQuestions }, (_, i) => i + 1);

  const handleTabChange = (qNum) => {
    setActiveTab(qNum);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">React - Interview Questions</h1>

      {/* Question tabs - scrollable */}
      <div className="mb-6 overflow-x-auto">
        <div className="flex gap-2 pb-2">
          {questions.map((qNum) => (
            <Link key={qNum} to={`/react/questions/qus${qNum}`}>
              <button
                onClick={() => handleTabChange(qNum)}
                className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                  activeTab === qNum
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Qus {qNum}
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* Routes for displaying content of each question */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <Routes>
          <Route path="qus1" element={<Question1 />} />
          <Route path="qus2" element={<Question2 />} />
          <Route path="qus3" element={<Question3 />} />
          {/* Default placeholder for other questions */}
          {questions.slice(3).map((qNum) => (
            <Route
              key={qNum}
              path={`qus${qNum}`}
              element={<QuestionPlaceholder qNum={qNum} />}
            />
          ))}
          <Route path="*" element={<Question1 />} />
        </Routes>
      </div>
    </div>
  );
}

// Placeholder component for questions not yet created
function QuestionPlaceholder({ qNum }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Question {qNum}</h2>
      <p className="text-gray-600 mb-4">
        This question content is not yet available. Add your interview question here.
      </p>
      <div className="bg-gray-100 p-4 rounded">
        <p className="font-semibold">Template:</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Question statement</li>
          <li>Expected answer</li>
          <li>Code examples</li>
          <li>Key points to remember</li>
        </ul>
      </div>
    </div>
  );
}

export default ReactQuestions;
