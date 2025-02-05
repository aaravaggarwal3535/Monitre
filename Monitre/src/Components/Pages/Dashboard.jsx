import React from "react";
import { auth } from "../../firebase.js"; // Import Firebase auth
import { signOut } from "firebase/auth"; // Import the signOut function
import { useNavigate } from "react-router-dom"; // For navigation

function Dashboard() {
  const navigate = useNavigate();
  const user = auth.currentUser; // Get the logged-in user
  
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <div className="text-lg">Dashboard</div>
        <div className="flex items-center space-x-4">
          <img
            src={user?.photoURL} // Display user profile photo
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <button
            onClick={handleLogout}
            className="py-2 px-4 bg-red-600 hover:bg-red-700 rounded-lg"
          >
            Logout
          </button>
        </div>
      </nav>
      <div className="p-6">
        <h1 className="text-3xl">Welcome to your Dashboard</h1>
        <p className="mt-4">Here is your user dashboard!</p>
      </div>
    </div>
  );
}

export default Dashboard;
