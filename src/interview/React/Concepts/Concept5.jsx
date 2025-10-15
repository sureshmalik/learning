import React from "react";

function Concept5() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">React Query (useQuery Hook)</h2>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-2">What is React Query?</h3>
          <div className="bg-yellow-50 p-4 rounded">
            <p className="mb-3">
              React Query is a powerful data-fetching and state management library for React applications. 
              It simplifies fetching, caching, synchronizing, and updating server state.
            </p>
            <p className="font-semibold mb-2">Key Features:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Automatic caching and background updates</li>
              <li>Built-in loading and error states</li>
              <li>Automatic refetching on window focus</li>
              <li>Pagination and infinite scroll support</li>
              <li>Request deduplication</li>
              <li>Optimistic updates</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Installation & Setup</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`# Install React Query
npm install react-query

# or
yarn add react-query`}
          </pre>
          <div className="mt-4">
            <p className="font-semibold mb-2">Setup QueryClient Provider:</p>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import { QueryClient, QueryClientProvider } from 'react-query';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourApp />
    </QueryClientProvider>
  );
}`}
            </pre>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Basic useQuery Example</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`import { useQuery } from 'react-query';

// Fetch function
const fetchTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function TodoComponent() {
  // Use the useQuery hook
  const { data, isLoading, error, isError } = useQuery('todos', fetchTodos);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  
  return (
    <div>
      <h1>Todo Item</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">useQuery Parameters</h3>
          <div className="bg-blue-50 p-4 rounded">
            <ul className="space-y-2">
              <li><strong>Query Key:</strong> <code>'todos'</code> - Unique identifier for the query (used for caching)</li>
              <li><strong>Query Function:</strong> <code>fetchTodos</code> - Function that returns a promise</li>
              <li><strong>Options:</strong> Configuration object (optional)</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Return Values</h3>
          <div className="bg-green-50 p-4 rounded">
            <ul className="list-disc ml-6 space-y-1">
              <li><code>data</code> - The fetched data</li>
              <li><code>isLoading</code> - True during first fetch</li>
              <li><code>isFetching</code> - True during any fetch (including background refetch)</li>
              <li><code>isError</code> - True if query encountered an error</li>
              <li><code>error</code> - Error object if query failed</li>
              <li><code>isSuccess</code> - True if query was successful</li>
              <li><code>refetch</code> - Function to manually refetch</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Advanced: Query with Parameters</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`function UserProfile({ userId }) {
  const fetchUser = async () => {
    const res = await fetch(\`/api/users/\${userId}\`);
    return res.json();
  };
  
  const { data, isLoading } = useQuery(
    ['user', userId],  // Query key includes userId
    fetchUser,
    {
      enabled: !!userId,  // Only run if userId exists
      staleTime: 5000,    // Data stays fresh for 5 seconds
      cacheTime: 10000,   // Cache for 10 seconds
      refetchOnWindowFocus: true,  // Refetch when window regains focus
    }
  );
  
  if (isLoading) return <div>Loading...</div>;
  
  return <div>{data?.name}</div>;
}`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Common Configuration Options</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`const { data } = useQuery('todos', fetchTodos, {
  // Refetch options
  refetchOnWindowFocus: true,    // Refetch when window focused
  refetchOnMount: true,          // Refetch on component mount
  refetchInterval: 5000,         // Refetch every 5 seconds
  
  // Cache options
  staleTime: 30000,              // Data fresh for 30 seconds
  cacheTime: 300000,             // Keep in cache for 5 minutes
  
  // Retry options
  retry: 3,                      // Retry failed requests 3 times
  retryDelay: 1000,              // Wait 1 second between retries
  
  // Conditional fetching
  enabled: true,                 // Only fetch if true
  
  // Callbacks
  onSuccess: (data) => {
    console.log('Success:', data);
  },
  onError: (error) => {
    console.log('Error:', error);
  },
});`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Manual Refetch</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
{`function TodoList() {
  const { data, refetch, isFetching } = useQuery('todos', fetchTodos);
  
  return (
    <div>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? 'Refreshing...' : 'Refresh'}
      </button>
      <ul>
        {data?.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </div>
  );
}`}
          </pre>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Comparison: useQuery vs useEffect</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 p-4 rounded">
              <h4 className="font-semibold mb-2">❌ Without React Query (useEffect)</h4>
              <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-x-auto">
{`const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  setLoading(true);
  fetch('/api/data')
    .then(res => res.json())
    .then(data => {
      setData(data);
      setLoading(false);
    })
    .catch(err => {
      setError(err);
      setLoading(false);
    });
}, []);`}
              </pre>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <h4 className="font-semibold mb-2">✅ With React Query</h4>
              <pre className="bg-gray-800 text-white p-2 rounded text-sm overflow-x-auto">
{`const { data, isLoading, error } = 
  useQuery('data', fetchData);

// That's it! 
// Caching, refetching, 
// error handling all built-in`}
              </pre>
            </div>
          </div>
        </section>

        <section className="bg-purple-50 p-4 rounded">
          <h3 className="text-xl font-semibold mb-3">Why Use React Query?</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Eliminates boilerplate code for data fetching</li>
            <li>Automatic caching prevents unnecessary network requests</li>
            <li>Built-in loading and error states</li>
            <li>Background refetching keeps data fresh</li>
            <li>Better user experience with optimistic updates</li>
            <li>DevTools for debugging queries</li>
            <li>Reduces component complexity</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Concept5;
