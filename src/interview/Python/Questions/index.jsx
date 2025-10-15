import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Question5 from "./Question5";
import Question6 from "./Question6";
import Question7 from "./Question7";
import Question8 from "./Question8";
import Question9 from "./Question9";
import Question10 from "./Question10";
import Question11 from "./Question11";
import Question12 from "./Question12";
import Question13 from "./Question13";
import Question14 from "./Question14";
import Question15 from "./Question15";
import Question16 from "./Question16";
import Question17 from "./Question17";

function PythonQuestions() {
  const [activeTab, setActiveTab] = useState(1);

  // Generate 100 questions
  const totalQuestions = 100;
  const questions = Array.from({ length: totalQuestions }, (_, i) => i + 1);

  const handleTabChange = (qNum) => {
    setActiveTab(qNum);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Python - Interview Questions</h1>

      {/* Question tabs - scrollable */}
      <div className="mb-6 overflow-x-auto">
        <div className="flex gap-2 pb-2">
          {questions.map((qNum) => (
            <Link key={qNum} to={`/python/questions/qus${qNum}`}>
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
          <Route path="qus4" element={<Question4 />} />
          <Route path="qus5" element={<Question5 />} />
          <Route path="qus6" element={<Question6 />} />
          <Route path="qus7" element={<Question7 />} />
          <Route path="qus8" element={<Question8 />} />
          <Route path="qus9" element={<Question9 />} />
          <Route path="qus10" element={<Question10 />} />
          <Route path="qus11" element={<Question11 />} />
          <Route path="qus12" element={<Question12 />} />
          <Route path="qus13" element={<Question13 />} />
          <Route path="qus14" element={<Question14 />} />
          <Route path="qus15" element={<Question15 />} />
          <Route path="qus16" element={<Question16 />} />
          <Route path="qus17" element={<Question17 />} />
          {/* Default placeholder for other questions */}
          {questions.slice(17).map((qNum) => (
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

export default PythonQuestions;
