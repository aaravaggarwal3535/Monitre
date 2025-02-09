import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Fix navigation
import { useForm } from "react-hook-form"


function Signup() {
  const [display, setDisplay] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    let dataSend = await fetch("http://127.0.0.1:3000/signup", { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify(data) });
    let response = await dataSend.text();
    if (response === "Email Existed") {
      setError("email", { message: "User already exists" });
    }
    if (response === "User Created") {
      reset();
      setDisplay(true);
    }
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded"
            {...register("name", { required: true, minLength: 3, maxLength: 80 })}
          />
          <input
            type="number"
            placeholder="Age"
            className="w-full px-4 py-2 border rounded"
            {...register("age", { required: true, min: 18, max: 120 })}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <p className="text-red-500 font-bold">{errors.email.message}</p>}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
            {...register("password", { required: true, minLength: 6 })}
          />
          {display && <p className="text-blue-500 font-bold">Sign-up Successfull</p>}
          {display && <p className="text-blue-500">Go To The Login Page</p>}
          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
