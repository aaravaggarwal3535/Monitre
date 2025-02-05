// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Home from './Components/Pages/Home.jsx';
import Login from './Components/Pages/Login.jsx';
import Dashboard from './Components/Pages/Dashboard.jsx'; // Create this as a new page for logged-in users
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Router setup
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,  // App will handle the layout (Header, Footer, and Outlet)
    children: [
      { path: '/', element: <Home /> }, // Home route
      { path: '/login', element: <Login /> }, // Login route
      { path: '/dashboard', element: <Dashboard /> }, // Protected route for logged-in users
    ],
  },
]);

// Rendering the app with routing
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
