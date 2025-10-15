import React from "react";

function Concept7() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Search Filter in React</h2>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-2">What is Search Filtering?</h3>
          <div className="bg-yellow-50 p-4 rounded">
            <p className="mb-3">
              Search filtering allows users to dynamically filter a list of items based on their input. 
              It's commonly used in search bars, dropdown filters, and data tables.
            </p>
            <p className="font-semibold">Common Use Cases:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Product search in e-commerce</li>
              <li>User search in admin panels</li>
              <li>Filtering dropdown options</li>
              <li>Table data filtering</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Basic Search Filter Example</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import { useState } from "react";

function SearchFilter() {
  const fruits = [
    "Apple",
    "Apricot",
    "Banana",
    "Cherry",
    "DragonFruit",
    "Elderberry",
    "Fig",
    "Grape",
    "HoneydewMelon",
    "Kiwi",
    "Lemon",
  ];

  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  // Filter fruits based on search input
  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">FRUITS</h2>
      <input
        className="border border-red-500 border-solid px-4 py-2 mb-4"
        type="text"
        placeholder="Search fruits"
        onChange={handleSearchInput}
        value={searchInput}
      />
      <div className="space-y-2">
        {filteredFruits.map((fruit, index) => (
          <p key={index} className="text-lg">{fruit}</p>
        ))}
      </div>
      {filteredFruits.length === 0 && (
        <p className="text-gray-500 mt-4">No fruits found</p>
      )}
    </div>
  );
}`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Filter Methods Comparison</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded">
              <h4 className="font-semibold mb-2">includes() - Match Anywhere</h4>
              <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-x-auto">
{`const filtered = fruits.filter(fruit =>
  fruit.toLowerCase()
    .includes(searchInput.toLowerCase())
);

// "app" matches:
// - Apple
// - Pineapple`}
              </pre>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-semibold mb-2">startsWith() - Match Beginning</h4>
              <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-x-auto">
{`const filtered = fruits.filter(fruit =>
  fruit.toLowerCase()
    .startsWith(searchInput.toLowerCase())
);

// "app" matches:
// - Apple
// NOT Pineapple`}
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Advanced: Search with Multiple Fields</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import { useState } from "react";

function UserSearch() {
  const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "User" },
    { id: 4, name: "Diana Prince", email: "diana@example.com", role: "Admin" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Search across multiple fields
  const filteredUsers = users.filter((user) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      user.name.toLowerCase().includes(searchLower) ||
      user.email.toLowerCase().includes(searchLower) ||
      user.role.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Search</h2>
      <input
        type="text"
        placeholder="Search by name, email, or role..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border px-4 py-2 w-full mb-4"
      />
      <div className="space-y-2">
        {filteredUsers.map((user) => (
          <div key={user.id} className="border p-4 rounded">
            <h3 className="font-bold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
            <span className="text-sm bg-blue-100 px-2 py-1 rounded">
              {user.role}
            </span>
          </div>
        ))}
      </div>
      {filteredUsers.length === 0 && (
        <p className="text-gray-500 text-center mt-4">No users found</p>
      )}
    </div>
  );
}`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">With Debouncing for Better Performance</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import { useState } from "react";
import useDebounce from "./useDebounce";

function DebouncedSearch() {
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearch = useDebounce(searchInput, 300);

  const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  // Only filter when debounced value changes
  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div className="p-6">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search fruits..."
        className="border px-4 py-2 w-full"
      />
      <p className="text-sm text-gray-500 mt-2">
        Searching for: {debouncedSearch}
      </p>
      <div className="mt-4 space-y-2">
        {filteredFruits.map((fruit, index) => (
          <p key={index}>{fruit}</p>
        ))}
      </div>
    </div>
  );
}`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">With Category Filter</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import { useState } from "react";

function ProductFilter() {
  const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999 },
    { id: 2, name: "Shirt", category: "Clothing", price: 29 },
    { id: 3, name: "Phone", category: "Electronics", price: 699 },
    { id: 4, name: "Jeans", category: "Clothing", price: 49 },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 flex-1"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border px-4 py-2"
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h3 className="font-bold">{product.name}</h3>
            <p className="text-gray-600">{product.category}</p>
            <p className="text-green-600 font-bold">\${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`}
          </pre>
        </section>

        <section className="bg-purple-50 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">Performance Tips:</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Use <code>useMemo</code> for expensive filtering operations</li>
            <li>Implement debouncing for real-time search</li>
            <li>Consider pagination for large datasets</li>
            <li>Use <code>key</code> prop correctly in mapped lists</li>
            <li>Avoid filtering in render - use state or memoization</li>
          </ul>
        </section>

        <section className="bg-green-50 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">Key Concepts:</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li><strong>Array.filter():</strong> Creates a new array with elements that pass the test</li>
            <li><strong>toLowerCase():</strong> Makes search case-insensitive</li>
            <li><strong>includes():</strong> Checks if string contains substring</li>
            <li><strong>startsWith():</strong> Checks if string starts with substring</li>
            <li>Always show feedback when no results found</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Concept7;
