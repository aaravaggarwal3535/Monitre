// Dashboard.jsx
import React from "react";
import Card from "../Card"; // Import the Card component
import { Link } from "react-router-dom";

const Dashboard = () => {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <div className="mt-10 px-7 font-bold text-[#04AD83] text-4xl">
        <h1>Dashboard</h1>
      </div>

      {/* Flex container to show the 2 boxes side by side */}
      <div className="flex gap-6 mt-10">
        {/* Green Box - Contains all cards */}
        <div className="bg-green-300 w-1/2 rounded-3xl p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to={"/"}>
              <Card
                title="Savings"
                description="Save today, secure tomorrow—building your future, one step at a time."
              />
            </Link>
            <Card
              title="Investment"
              description="Invest smart, save big—secure your future with just a click!"
            />
            <Card
              title="Goals"
              description="Dream big, track your goals, and turn them into reality."
            />
            <Card
              title="Banking"
              description="Step into the world of easy banking—tap to begin!"
            />
            <Card
              title="Track"
              description="Keep your progress at your fingertips—track it all with ease!"
            />
          </div>
        </div>

        {/* Red Box - Contains dummy text */}
        <div className="bg-red-500 w-1/2 rounded-3xl p-6 flex justify-center items-center">
          <p className="text-white text-xl font-semibold">
            This is a red box with some dummy text. Feel free to add more information or modify this content.
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
