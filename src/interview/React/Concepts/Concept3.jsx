import React from "react";

function Concept3() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Performance Optimization</h2>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-2">1. React.memo</h3>
          <div className="bg-yellow-50 p-4 rounded mb-3">
            <p>Prevents unnecessary re-renders of functional components</p>
          </div>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import React, { memo } from 'react';

const ExpensiveComponent = memo(({ data }) => {
  console.log('Rendering ExpensiveComponent');
  return <div>{data}</div>;
});

// Only re-renders if 'data' prop changes`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">2. useMemo</h3>
          <div className="bg-blue-50 p-4 rounded mb-3">
            <p>Memoizes expensive calculations</p>
          </div>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import { useMemo, useState } from 'react';

function ExpensiveCalculation({ numbers }) {
  const [count, setCount] = useState(0);
  
  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return numbers.reduce((a, b) => a + b, 0);
  }, [numbers]); // Only recalculates when numbers change
  
  return (
    <div>
      <p>Sum: {sum}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">3. useCallback</h3>
          <div className="bg-green-50 p-4 rounded mb-3">
            <p>Memoizes callback functions</p>
          </div>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import { useCallback, useState } from 'react';

function Parent() {
  const [count, setCount] = useState(0);
  
  // Function reference stays the same between renders
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // Empty deps = never recreated
  
  return (
    <div>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>
        Parent Count: {count}
      </button>
    </div>
  );
}

const Child = memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
});`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">4. Code Splitting</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import { lazy, Suspense } from 'react';

// Lazy load component
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}`}
          </pre>
        </section>
      </div>
    </div>
  );
}

export default Concept3;
