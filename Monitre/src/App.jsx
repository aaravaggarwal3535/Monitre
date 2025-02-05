// App.jsx
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Components/Header/Header"; // Make sure Header is set up to conditionally render content based on login state
import { auth } from "./firebase"; // Import Firebase auth
import { onAuthStateChanged } from "firebase/auth"; // Import auth state change listener

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update user when authentication state changes
    });

    return () => unsubscribe(); // Cleanup the listener when the component unmounts
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect to login if not logged in
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex flex-wrap content-between">
      <div className="w-full block">
        {/* Pass user to Header component to manage display of profile picture or login button */}
        <Header user={user} />
        <main className="flex-grow p-4 bg-white pt-16">
          {/* Render nested routes like Home, About, etc. */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
