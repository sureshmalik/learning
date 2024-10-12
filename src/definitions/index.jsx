import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import PythonStrings from "./pythonStrings";
import PythonBasics from "./pythonBasics";
import PythonList from "./pythonList";
import PythonOOPS from "./pythonOOPS";
import PythonLearning from "./pythonLearning";

function Definitions() {
  return (
    <>
      <div className="flex space-x-4 mb-10">
        <div>
          <Link to="/pythonLearning">
            <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">
              Python Learning
            </button>
          </Link>
        </div>
        <div>
          <Link to="/pythonBasics">
            <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">
              Python Basics
            </button>
          </Link>
        </div>
        <div>
          <Link to="/pythonStrings">
            <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">
              Python Strings
            </button>
          </Link>
        </div>
        <div>
          <Link to="/pythonList">
            <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">
              Python List
            </button>
          </Link>
        </div>
        <div>
          <Link to="/pythonOOPS">
            <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">
              Python OOPS
            </button>
          </Link>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="pythonLearning/*" element={<PythonLearning />} /> {/* Added * here */}
          <Route path="pythonBasics" element={<PythonBasics />} />
          <Route path="pythonStrings" element={<PythonStrings />} />
          <Route path="pythonList" element={<PythonList />} />
          <Route path="pythonOOPS" element={<PythonOOPS />} />
        </Routes>
      </div>
    </>
  );
}

export default Definitions;
