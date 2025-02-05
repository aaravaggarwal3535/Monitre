import React, { useState } from "react";
import { auth, googleProvider } from "../../firebase.js"; // Import Firebase auth and Google provider
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import the navigate hook

function Login() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userCredential = result.user;
      setUser(userCredential);
      setError(null); // Reset error on successful login
      console.log("Logged in user: ", userCredential);
      navigate("/dashboard"); // Redirect to the dashboard after login
    } catch (err) {
      setError("Error logging in with Google");
      console.error("Error:", err);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        {user ? (
          <div>
            <h3 className="text-center text-lg">Welcome, {user.displayName}</h3>
            <p className="text-center text-sm text-gray-500">You are logged in!</p>
          </div>
        ) : (
          <div>
            <button
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={handleGoogleLogin}
            >
              Login with Google
            </button>
            {error && <p className="text-red-500 mt-3">{error}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
