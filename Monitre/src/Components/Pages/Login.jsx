// Login.jsx
import React, { useState } from "react";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userCredential = result.user;
      setError(null); // Reset error on successful login
      navigate("/dashboard"); // Redirect to dashboard after login
    } catch (err) {
      setError("Error logging in with Google");
      console.error("Error:", err);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <button
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={handleGoogleLogin}
        >
          Login with Google
        </button>
        {error && <p className="text-red-500 mt-3">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
