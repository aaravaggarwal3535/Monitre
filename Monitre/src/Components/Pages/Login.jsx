import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from "react-redux"
import { assignId } from "../../redux/credentials/idSlice";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm()

  const dispatch = useDispatch();
  const id = useSelector((state) => state.id.value);

  const onSubmit = async (data) => {
    let dataSend = await fetch("http://127.0.0.1:3000/login", { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify(data) });
    let response = await dataSend.text();
    if (response === "Login Failed") {
      setError("email", { message: "Either email or password is wrong" });
    }
    else {
      response = JSON.parse(response)[0].id;
      dispatch(assignId(response));
    }
  }

  useEffect(() => {
    if (id) {
      window.location.href = "/dashboard";
    }
  }, [id]);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.email && <p className="text-red-500 font-bold">{errors.email.message}</p>}
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login; 