import React from "react";

function Concept6() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Forms in React (useState vs useRef)</h2>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-2">Two Approaches to Handle Forms</h3>
          <div className="bg-yellow-50 p-4 rounded">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">useState (Controlled Components)</h4>
                <ul className="list-disc ml-6 space-y-1">
                  <li>React controls the input value</li>
                  <li>Value stored in state</li>
                  <li>Re-renders on every keystroke</li>
                  <li>Good for validation, formatting</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">useRef (Uncontrolled Components)</h4>
                <ul className="list-disc ml-6 space-y-1">
                  <li>DOM controls the input value</li>
                  <li>Value accessed via ref</li>
                  <li>No re-renders on input change</li>
                  <li>Better performance for simple forms</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Method 1: Using useState (Controlled)</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import { useState } from "react";

function SimpleFormWithState() {
  const [inputNameValue, setInputNameValue] = useState("");

  const handleNameChanges = (e) => {
    setInputNameValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", inputNameValue);
    console.log("Form Submitted");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Form with useState Hook</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="block">
          Name:
          <input
            className="border border-red-500 border-solid ml-2 px-2 py-1"
            type="text"
            value={inputNameValue}
            placeholder="Your Name"
            onChange={handleNameChanges}
          />
        </label>
        <button 
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white font-bold"
          type="submit"
        >
          Submit Name
        </button>
      </form>
      <p className="mt-4">Current Value: {inputNameValue}</p>
    </div>
  );
}`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Method 2: Using useRef (Uncontrolled)</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import { useRef } from "react";

function SimpleFormWithRef() {
  const inputEmailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", inputEmailRef.current.value);
    console.log("Form Submitted");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Form with useRef Hook</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="block">
          Email:
          <input
            className="border border-red-500 border-solid ml-2 px-2 py-1"
            type="email"
            ref={inputEmailRef}
            placeholder="Your Email"
          />
        </label>
        <button 
          className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-white font-bold"
          type="submit"
        >
          Submit Email
        </button>
      </form>
    </div>
  );
}`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Combined Example: Dynamic Form Component</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import { useState, useRef } from "react";

function DynamicForm({ usingHook }) {
  const [inputNameValue, setInputNameValue] = useState("");
  const inputEmailRef = useRef(null);

  const handleNameChanges = (e) => {
    setInputNameValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usingHook === "useState") {
      console.log("Name:", inputNameValue);
    } else {
      console.log("Email:", inputEmailRef.current.value);
    }
    console.log("Form Submitted");
  };

  return usingHook === "useState" ? (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-xl font-bold mb-4">Form with useState Hook</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            className="border border-red-500 border-solid ml-2"
            type="text"
            value={inputNameValue}
            placeholder="Your Name"
            onChange={handleNameChanges}
          />
        </label>
        <button 
          className="ml-2 bg-blue-500 px-3 py-2 rounded text-white"
          type="submit"
        >
          Submit Name
        </button>
      </form>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-xl font-bold mb-4">Form with useRef Hook</h2>
      <form onSubmit={handleSubmit}>
        <label className="mr-4">
          Email:
          <input
            className="border border-red-500 border-solid ml-2"
            type="email"
            ref={inputEmailRef}
            placeholder="Your Email"
          />
        </label>
        <button
          className="bg-orange-500 hover:bg-orange-600 px-3 py-2 rounded text-white font-bold"
          type="submit"
        >
          Submit Email
        </button>
      </form>
    </div>
  );
}

// Usage
<DynamicForm usingHook="useState" />
<DynamicForm usingHook="useRef" />`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Advanced: Form with Multiple Fields</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import { useState } from "react";

function MultiFieldForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    country: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6">
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border px-2 py-1 ml-2"
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border px-2 py-1 ml-2"
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="border px-2 py-1 ml-2"
        />
      </div>
      <div>
        <label>Country:</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="border px-2 py-1 ml-2"
        >
          <option value="">Select...</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="India">India</option>
        </select>
      </div>
      <button 
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}`}
          </pre>
        </section>

        <section className="bg-blue-50 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">When to Use Which?</h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold">Use useState when:</h4>
              <ul className="list-disc ml-6">
                <li>You need real-time validation</li>
                <li>You want to display the current value</li>
                <li>You need to format input as user types</li>
                <li>You need to disable/enable buttons based on input</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Use useRef when:</h4>
              <ul className="list-disc ml-6">
                <li>You only need the value on submit</li>
                <li>Performance is critical (large forms)</li>
                <li>You're working with file inputs</li>
                <li>You need to focus an input programmatically</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-green-50 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">Key Takeaways:</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Controlled (useState):</strong> React owns the data, more control, more re-renders</li>
            <li><strong>Uncontrolled (useRef):</strong> DOM owns the data, less control, better performance</li>
            <li>Use <code>e.preventDefault()</code> to prevent page reload on submit</li>
            <li>For multiple fields, use an object in state</li>
            <li>Always validate user input before submission</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Concept6;
