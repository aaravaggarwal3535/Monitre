import React, { useState, useEffect } from "react";
import { use } from "react";
import { useSelector, useDispatch } from "react-redux"

const PersonalDetails = () => {
  const [details, setDetails] = useState({});
  const [emNa, setEmNa] = useState({});

  const id = useSelector((state) => state.id.value);

  const fetchDetails = async () => {
    const data = { id: id };
    const dataSend = await fetch("http://127.0.0.1:3000/personal-details", { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify(data) });
    const response = await dataSend.text();
    setDetails(JSON.parse(response)[0]);
  }

  const fetchEmNa = async ()=>{
    const data = { id: id };
    const dataSend = await fetch("http://127.0.0.1:3000/emna-details", { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify(data) });
    const response = await dataSend.text();
    setEmNa(JSON.parse(response));
  }

  useEffect(() => {
    fetchDetails();
    fetchEmNa();
  },[id]);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-[#04AD83] mb-6">
        Personal Details
      </h1>

      {/* Form Start */}
      <form  className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-semibold">Name:</label>
          <input
            type="text"
            placeholder={emNa.name}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-semibold">Email:</label>
          <input
            type="email"
            placeholder={emNa.email}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 font-semibold">Phone</label>
          <input
            type="phone"
            placeholder={details.phone}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>

        {/* PAN */}
        <div>
          <label className="block text-gray-700 font-semibold">PAN</label>
          <input
            type="pan"
            placeholder={details.pan}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>

        {/* Monthly Income */}
        <div>
          <label className="block text-gray-700 font-semibold">Monthly Income:</label>
          <input
            type="number"
            placeholder={details.income}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>

        {/* Monthly Expenses */}
        <div>
          <label className="block text-gray-700 font-semibold">Monthly Expenses:</label>
          <input
            type="number"
            placeholder={details.expense}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>

        {/* Savings */}
        <div>
          <label className="block text-gray-700 font-semibold">Savings:</label>
          <input
            type="number"
            placeholder={details.saving}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>

        {/* Financial Goals */}
        <div>
          <label className="block text-gray-700 font-semibold">Financial Goals:</label>
          <textarea
            placeholder={details.goals}
            className="w-full border border-gray-300 p-2 rounded-lg"
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
