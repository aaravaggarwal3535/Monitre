import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./Components/Pages/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Pages/Login.jsx";
import Dashboard from "./Components/Pages/Dashboard.jsx";
import Signup from "./Components/Pages/Signup.jsx";
import ConfirmEmail from "./Components/Pages/ConfirmEmail.jsx";
import PersonalDetails from "./Components/Pages/PersonalDetails.jsx";
// import ProtectedRoute from "./Components/ProtectedRoute.js";

// Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/confirm-email", element: <ConfirmEmail /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/personal-details", element: <PersonalDetails /> },
      
      // ✅ Protect the Dashboard Route
      // {
      //   path: "/dashboard",
      //   element: (
      //     <ProtectedRoute>
      //       <Dashboard />
      //     </ProtectedRoute>
      //   ),
      // },
    ],
  },
]);

// Rendering the app with routing
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
