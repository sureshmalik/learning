import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import SimpleForm1 from "./simpleForm1";
import SearchFilter from "./searchFilter";
import Debouncing from "./debouncing";
import ReduxExample from "./redux";
import UseQueryHook from "./hooksImplemetation/useQuery";
import Definitions from "./definitions";
import Dsa from "./dsa";
import LC150 from "./dsa/lc150";
import InterviewHome from "./interview/Home";
import Python from "./interview/Python";
import ReactInterview from "./interview/React";
import "./input.css";

function App() {
  return (
    <>
      <div className="flex flex-wrap gap-2 mb-4 mt-2 px-4">
        <div>
          <Link to="/">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg">
              🎯 Interview Prep
            </button>
          </Link>
        </div>
        <div>
          <Link to="/python">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg">
              🐍 Python
            </button>
          </Link>
        </div>
        <div>
          <Link to="/react">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg">
              ⚛️ React
            </button>
          </Link>
        </div>
        <div>
          <Link to="/definitions">
            <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-lg">
              Old Definitions
            </button>
          </Link>
        </div>
        <div>
          <Link to="/dsa">
            <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-lg">
              Old DSA
            </button>
          </Link>
        </div>
        <div>
          <Link to="/reduxExample">
            <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-lg">
              Redux Example
            </button>
          </Link>
        </div>
        <div>
          <Link to="/simpleForm1">
            <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-lg">
              Simple Form
            </button>
          </Link>
        </div>
        <div>
          <Link to="/searchFilter">
            <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-lg">
              Search Filter
            </button>
          </Link>
        </div>
        <div>
          <Link to="/debouncing">
            <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-lg">
              Debouncing
            </button>
          </Link>
        </div>
        <div>
          <Link to="/useQueryHook">
            <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-lg">
              useQuery Hook
            </button>
          </Link>
        </div>
      </div>
      <div>
        <Routes>
          {/* New Interview Preparation Routes */}
          <Route path="/" element={<InterviewHome />} />
          <Route path="/python/*" element={<Python />} />
          <Route path="/react/*" element={<ReactInterview />} />
          
          {/* Old Routes */}
          <Route path="/definitions/*" element={<Definitions />} />
          <Route path="/dsa/*" element={<Dsa />} />
          <Route path="/LC150/*" element={<LC150 />} />
          <Route path="/reduxExample" element={<ReduxExample />} />
          <Route path="/simpleForm1" element={<SimpleForm1 usingHook="useRef" />} />
          <Route path="/searchFilter" element={<SearchFilter />} />
          <Route path="/debouncing" element={<Debouncing />} />
          <Route path="/useQueryHook" element={<UseQueryHook />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
