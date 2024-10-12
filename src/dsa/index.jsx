import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import LC150 from "./lc150";

function Dsa() {
  return (
    <>
      <div className="flex space-x-4 mb-10">
        <div>
          <Link to="/LC150">
            <button className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">
              LC150
            </button>
          </Link>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="LC150/*" element={<LC150 />} />
        </Routes>
      </div>
    </>
  );
}

export default Dsa;
