import React from "react";

function Concept4() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Debouncing in React</h2>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-2">What is Debouncing?</h3>
          <div className="bg-yellow-50 p-4 rounded">
            <p className="mb-3">
              Debouncing is a programming technique used to ensure that a function is not called too frequently. 
              It's particularly useful in scenarios where a function could be triggered multiple times in quick succession, 
              such as when handling events like keystrokes, window resizing, or scrolling.
            </p>
            <p className="font-semibold">Common Use Cases:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Search input fields (wait for user to stop typing)</li>
              <li>API calls on input change</li>
              <li>Window resize events</li>
              <li>Scroll events</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Why Not Just Use setTimeout?</h3>
          <div className="bg-red-50 p-4 rounded">
            <p className="font-semibold mb-2">Drawbacks of Using setTimeout:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>No Cancellation:</strong> Unlike debouncing, setTimeout schedules a function to run after a delay regardless of subsequent calls</li>
              <li><strong>Multiple Queued Callbacks:</strong> If events fire rapidly, multiple setTimeout calls will queue up, causing unnecessary executions</li>
              <li><strong>Less Control:</strong> Debouncing provides more fine-grained control over behavior</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Custom useDebounce Hook</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    // Set up the timeout
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    // Cleanup function - cancels previous timeout
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  
  return debouncedValue;
};

export default useDebounce;`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Usage Example: Search Input</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import { useState } from "react";
import useDebounce from "./useDebounce";

function SearchComponent() {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 500);
  
  // This effect runs only when debouncedSearchText changes
  useEffect(() => {
    if (debouncedSearchText) {
      // Make API call here
      console.log("Searching for:", debouncedSearchText);
      fetch(\`/api/search?q=\${debouncedSearchText}\`)
        .then(res => res.json())
        .then(data => console.log(data));
    }
  }, [debouncedSearchText]);
  
  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search..."
      />
      <p>Searching for: {debouncedSearchText}</p>
    </div>
  );
}`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">How It Works</h3>
          <div className="bg-blue-50 p-4 rounded">
            <ol className="list-decimal ml-6 space-y-2">
              <li>User types in the input field</li>
              <li><code>searchText</code> updates immediately on every keystroke</li>
              <li><code>useDebounce</code> hook starts a timer (500ms)</li>
              <li>If user types again before 500ms, the previous timer is cleared</li>
              <li>After user stops typing for 500ms, <code>debouncedSearchText</code> updates</li>
              <li>API call is triggered only when <code>debouncedSearchText</code> changes</li>
            </ol>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Alternative: Debounce Function Calls</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import { useCallback, useRef } from "react";

function useDebounceCallback(callback, delay) {
  const timeoutRef = useRef(null);
  
  const debouncedCallback = useCallback((...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
  
  return debouncedCallback;
}

// Usage
function Component() {
  const handleSearch = useDebounceCallback((query) => {
    console.log("Searching:", query);
  }, 500);
  
  return (
    <input onChange={(e) => handleSearch(e.target.value)} />
  );
}`}
          </pre>
        </section>

        <section className="bg-green-50 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">Key Benefits:</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Reduces number of API calls</li>
            <li>Improves performance</li>
            <li>Better user experience (no lag from too many updates)</li>
            <li>Saves server resources</li>
            <li>Prevents race conditions</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Concept4;
