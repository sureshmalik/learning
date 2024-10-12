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
import "./input.css";

function App() {
  return (
    <>
      <div className="flex space-x-4 mb-2 mt-1">
        <div>
          <Link to="*">
            <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">Definitions</button>
          </Link>
        </div>
        <div>
          <Link to="/dsa">
            <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">DSA</button>
          </Link>
        </div>
        <div>
          <Link to="reduxExample">
            <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">Redux Example</button>
          </Link>
        </div>
        <div>
          <Link to="/simpleForm1">
            <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">Go to Simple Form</button>
          </Link>
        </div>
        <div>
          <Link to="/searchFilter">
            <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">Go to Search Filter</button>
          </Link>
        </div>
        <div>
          <Link to="/debouncing">
            <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">Go to Debouncing</button>
          </Link>
        </div>
        <div>
          <Link to="useQueryHook">
            <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">useQueryHook Example</button>
          </Link>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="*" element={<Definitions />} />
          <Route path="/dsa/*" element={<Dsa />} />
          <Route path="/LC150/*" element={<LC150 />} /> {/* Add LC150 route here */}
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
