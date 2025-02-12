import React, { useState } from "react";

const PersonalDetails = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    income: "",
    expenses: "",
    savings: "",
    goals: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Personal details saved successfully!");
    console.log("Saved Details:", details);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-[#04AD83] mb-6">
        Personal Details
      </h1>

      {/* Form Start */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-semibold">Name:</label>
          <input
            type="text"
            name="name"
            value={details.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full border border-gray-300 p-2 rounded-lg"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-semibold">Email:</label>
          <input
            type="email"
            name="email"
            value={details.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-gray-300 p-2 rounded-lg"
            required
          />
        </div>

        {/* Monthly Income */}
        <div>
          <label className="block text-gray-700 font-semibold">Monthly Income:</label>
          <input
            type="number"
            name="income"
            value={details.income}
            onChange={handleChange}
            placeholder="Enter your monthly income"
            className="w-full border border-gray-300 p-2 rounded-lg"
            required
          />
        </div>

        {/* Monthly Expenses */}
        <div>
          <label className="block text-gray-700 font-semibold">Monthly Expenses:</label>
          <input
            type="number"
            name="expenses"
            value={details.expenses}
            onChange={handleChange}
            placeholder="Enter your monthly expenses"
            className="w-full border border-gray-300 p-2 rounded-lg"
            required
          />
        </div>

        {/* Savings */}
        <div>
          <label className="block text-gray-700 font-semibold">Savings:</label>
          <input
            type="number"
            name="savings"
            value={details.savings}
            onChange={handleChange}
            placeholder="Enter your current savings"
            className="w-full border border-gray-300 p-2 rounded-lg"
            required
          />
        </div>

        {/* Financial Goals */}
        <div>
          <label className="block text-gray-700 font-semibold">Financial Goals:</label>
          <textarea
            name="goals"
            value={details.goals}
            onChange={handleChange}
            placeholder="Enter your financial goals (e.g., Buy a house, Save for a car)"
            className="w-full border border-gray-300 p-2 rounded-lg"
            required
          />
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="mt-4 w-full bg-[#04AD83] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#038b66]"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default PersonalDetails;
