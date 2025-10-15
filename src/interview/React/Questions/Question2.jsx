import React from "react";

function Question2() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-green-700">Question 2: What are React Hooks? Why were they introduced?</h2>
      
      <div className="space-y-6">
        <section className="bg-blue-50 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">Answer:</h3>
          <p className="mb-3">
            Hooks are functions that let you use state and other React features in functional components 
            without writing a class.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold">Common Hooks:</h4>
            <ul className="list-disc ml-6 space-y-1">
              <li><code>useState</code> - Manage state</li>
              <li><code>useEffect</code> - Handle side effects</li>
              <li><code>useContext</code> - Access context</li>
              <li><code>useRef</code> - Reference DOM elements or persist values</li>
              <li><code>useMemo</code> - Memoize values</li>
              <li><code>useCallback</code> - Memoize functions</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3">Why Hooks?</h3>
          <div className="bg-green-50 p-4 rounded">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Reuse stateful logic:</strong> Custom hooks allow sharing logic between components</li>
              <li><strong>Simpler code:</strong> No need for class components, this binding, or lifecycle methods</li>
              <li><strong>Better organization:</strong> Related logic stays together instead of split across lifecycle methods</li>
              <li><strong>Smaller bundle size:</strong> Functions minify better than classes</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-3">Example:</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`// Before Hooks (Class Component)
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  
  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        Count: {this.state.count}
      </button>
    );
  }
}

// With Hooks (Functional Component)
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}
          </pre>
        </section>

        <section className="bg-yellow-50 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">Rules of Hooks:</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Only call hooks at the top level (not in loops, conditions, or nested functions)</li>
            <li>Only call hooks from React function components or custom hooks</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Question2;
