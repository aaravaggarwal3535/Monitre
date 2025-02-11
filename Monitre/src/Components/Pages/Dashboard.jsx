import React from "react";
import Card from "../Card"; // Import the Card component
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"

const Dashboard = () => {
  const id = useSelector((state) => state.id.value);
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
            <Link>
            <Card
              title="Investment"
              description="Invest smart, save big—secure your future with just a click!"
              />
              </Link>
            <Link>
            <Card
              title="Goals"
              description="Dream big, track your goals, and turn them into reality."
              />
              </Link>
            <Link>
            <Card
              title="Banking"
              description="Step into the world of easy banking—tap to begin!"
              />
              </Link>
            <Link>
            <Card
              title="Track"
              description="Keep your progress at your fingertips—track it all with ease!"
              />
              </Link>
            <Link to={'/personal-details'}>
            <Card
              title="Personal Details"
              description="Details saved by the user."
              />
              </Link>
          </div>
        </div>

        {/* Image Container (Replacing Red Box) */}
        <div
          className="w-1/2 rounded-3xl p-6 flex justify-center items-center bg-cover bg-center"
          style={{ backgroundImage: "url('/dashboard.svg')" }}
        >
          {/* If you want text overlay, you can add it here */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
