import React from 'react';
import { useQuery } from 'react-query';

const fetchData = async () => {
  // Simulate fetching data from an API
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const UseQueryHook = () => {
  // Fetch data using the useQuery hook
  const { data, isLoading, error } = useQuery('todos', fetchData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div class = "flex flex-col items-center justify-center min-h-screen ">
      <h1>Todos</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default UseQueryHook;
