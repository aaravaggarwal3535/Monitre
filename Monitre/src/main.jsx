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
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import PersonalDetailsSumbit from "./Components/Pages/PersonalDetailsSumbit.jsx";
import Investment from "./Components/Pages/Investment.jsx";
import Goals from "./Components/Pages/Goals.jsx";
import Savings from "./Components/Pages/Savings.jsx";
import NotFound from "./Components/Pages/notFound.jsx";
// import ProtectedRoute from "./Components/ProtectedRoute.js";
import YourGoals from "./Components/Pages/YourGoals.jsx";
import Savings from "./Components/Pages/Savings.jsx";

// Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/savings", element: <Savings /> },
      { path: "/signup", element: <Signup /> },
      { path: "/confirm-email", element: <ConfirmEmail /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/personal-details", element: <PersonalDetails /> },
      { path: "/personal-details-sumbit", element: <PersonalDetailsSumbit /> },
      { path: "/investment", element: <Investment /> },
<<<<<<< HEAD
      { path: "/goals", element: <Goals /> },
=======
      { path: "/goals", element: <YourGoals /> },
      { path: "/savings", element: <Savings /> },

>>>>>>> 159459f0b7b792c01c253684407fbff65ce984f1
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
  { path: "*", element: <NotFound /> },
]);

// Rendering the app with routing
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
