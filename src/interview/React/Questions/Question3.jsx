import React from "react";

function Question3() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-green-700">Question 3: What is the difference between props and state?</h2>
      
      <div className="space-y-6">
        <section className="bg-blue-50 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">Answer:</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Props:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Passed from parent to child</li>
                <li>Read-only (immutable)</li>
                <li>Cannot be modified by child</li>
                <li>Used for component configuration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">State:</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Managed within component</li>
                <li>Mutable (can be changed)</li>
                <li>Updated using setState/useState</li>
                <li>Used for dynamic data</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3">Code Example:</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`// Parent Component
function Parent() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <Child name="Alice" count={count} />
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// Child Component
function Child({ name, count }) {
  // name and count are props (read-only)
  // Cannot do: name = "Bob" ❌
  
  return (
    <div>
      <p>Hello {name}</p>
      <p>Count: {count}</p>
    </div>
  );
}

// Component with State
function Counter() {
  const [count, setCount] = useState(0);
  
  // count is state (can be modified)
  const increment = () => setCount(count + 1); // ✓
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}`}
          </pre>
        </section>

        <section className="bg-yellow-50 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">Key Points:</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Props flow down (parent to child)</li>
            <li>State is local to the component</li>
            <li>Changing state triggers re-render</li>
            <li>Props changes also trigger re-render</li>
            <li>State can be passed as props to children</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Question3;
