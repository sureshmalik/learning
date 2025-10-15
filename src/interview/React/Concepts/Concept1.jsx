import React from "react";

function Concept1() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">React Hooks</h2>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-2">1. useState</h3>
          <div className="bg-yellow-50 p-4 rounded mb-3">
            <p>Manages state in functional components</p>
          </div>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">2. useEffect</h3>
          <div className="bg-blue-50 p-4 rounded mb-3">
            <p>Handles side effects (API calls, subscriptions, etc.)</p>
          </div>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(data => setData(data));
    
    // Cleanup function
    return () => {
      console.log('Cleanup');
    };
  }, []); // Empty array = run once on mount
  
  return <div>{data?.title}</div>;
}`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">3. useRef</h3>
          <div className="bg-green-50 p-4 rounded mb-3">
            <p>Access DOM elements or persist values without re-rendering</p>
          </div>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);
  
  const focusInput = () => {
    inputRef.current.focus();
  };
  
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}`}
          </pre>
        </section>
      </div>
    </div>
  );
}

export default Concept1;
