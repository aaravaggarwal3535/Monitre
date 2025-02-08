 import React, { useState } from "react";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userCredential = result.user;
      
      console.log("User photo URL:", userCredential.photoURL); // Debugging
      
      setUser({
        name: userCredential.displayName,
        email: userCredential.email,
        photo: userCredential.photoURL, // Correct way to access the profile picture
      });

      setError(null);
      navigate("/dashboard");
    } catch (err) {
      setError("Error logging in with Google");
      console.error("Error:", err);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        {user ? (
          <div>
            {user.photo ? (
              <img
                src={user.photo}
                alt="Profile"
                className="w-16 h-16 rounded-full mx-auto mb-2"
              />
            ) : (
              <p className="text-gray-500">No Profile Picture</p>
            )}
            <p className="text-lg font-medium">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        ) : (
          <button
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={handleGoogleLogin}
          >
            Login with Google
          </button>
        )}
        {error && <p className="text-red-500 mt-3">{error}</p>}
      </div>
    </div>
  );
};

export default Login; 