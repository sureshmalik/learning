import React from "react";

function Question1() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-green-700">Question 1: What is the Virtual DOM?</h2>
      
      <div className="space-y-6">
        <section className="bg-blue-50 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">Answer:</h3>
          <p className="mb-3">
            The Virtual DOM is a lightweight JavaScript representation of the actual DOM. 
            React uses it to optimize updates and improve performance.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold">How it works:</h4>
            <ol className="list-decimal ml-6 space-y-1">
              <li>React creates a virtual representation of the UI in memory</li>
              <li>When state changes, React creates a new Virtual DOM tree</li>
              <li>React compares the new tree with the previous one (diffing)</li>
              <li>Only the changed elements are updated in the real DOM (reconciliation)</li>
            </ol>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3">Benefits:</h3>
          <div className="bg-green-50 p-4 rounded">
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Performance:</strong> Minimizes expensive DOM operations</li>
              <li><strong>Batching:</strong> Multiple updates are batched together</li>
              <li><strong>Efficiency:</strong> Only necessary changes are applied</li>
              <li><strong>Cross-platform:</strong> Enables React Native</li>
            </ul>
          </div>
        </section>

        <section className="bg-yellow-50 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">Key Points:</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Virtual DOM is NOT faster than direct DOM manipulation</li>
            <li>It's about making updates predictable and easier to optimize</li>
            <li>React Fiber (React 16+) improved the reconciliation algorithm</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Question1;
