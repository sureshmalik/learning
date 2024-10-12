import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./ReduxExample/store.jsx";

// Create a new QueryClient instance
const queryClient = new QueryClient();
// By wrapping your entire application with QueryClientProvider and providing a QueryClient instance, 
// you ensure that the useQuery hook has access to the QueryClient for caching and managing data.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();








