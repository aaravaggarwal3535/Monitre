// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Home from './Components/Pages/Home.jsx'; // Import Home page
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Components/Pages/Login.jsx'; // Import Login page
import Dashboard from './Components/Pages/Dashboard.jsx'; // Import Dashboard

// Router setup
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,  // App will handle layout
    children: [
      { path: '/', element: <Home /> }, // Default route is Home
      { path: '/login', element: <Login /> }, // Login route
      { path: '/dashboard', element: <Dashboard /> }, // Dashboard route
    ],
  },
]);

// Rendering the app with routing
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
