// Header.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase"; // Import auth from firebase
import { signOut } from "firebase/auth";

const Header = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase logout
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-10">
      <div className="mx-auto px-4 sm:px-2 justify-center items-center">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/">
              <img className="h-20 w-auto" src="/logo.png" alt="Logo" />
            </a>
          </div>

          <div className="flex items-center space-x-4">
            {!user ? (
              <>
                <a
                  href="/login"
                  className="text-gray-600 hover:text-[#04AD83] text-lg font-medium"
                >
                  Log In
                </a>
                <a
                  href="/signup"
                  className="bg-[#04AD83] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700"
                >
                  Sign Up
                </a>
              </>
            ) : (
              <>
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-md text-sm"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
