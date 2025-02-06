import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Link to={"/"}>
        <div className="text-black font-bold mt-10 text-2xl text-center bg-white p-4">
          <h2>Take Control of Your Finances – Save, Invest!</h2>
          <h3>
            Make Your <span className="text-[#04AD83]">Money</span> Tree Now!
          </h3>
        </div>
        <div className="bg-black h-0.5 mt-10"></div>

        <div className="bg-gray-100 mt-[50px] rounded-lg h-[30vh] w-[120vh] mx-5 md:mx-5 text-center flex flex-col justify-center items-center space-y-4">
          {/* Previous content */}
          <p className="px-4 md:px-16">
            Take control of your money like never before. With Monitre, managing
            your finances is simple, smart, and stress-free. Track your
            expenses, grow your savings, and make informed investment decisions—
            all in one place. Whether you're planning for the future or
            optimizing your daily spending, Monetre is your ultimate financial
            companion.
          </p>

          <button className="cursor-pointer px-6 py-2 bg-[#04AD83] hover:bg-green-700 text-white rounded-lg">
            Get Started
          </button>
        </div>

        {/* Heading and Paragraph directly above the red boxes */}
        <div className="px-4 md:px-20 ">
          <h2 className="font-bold text-3xl mt-50">
            Indian market <br /> at your fingertips
          </h2>
          <p className="mt-5">
            Long-term or short-term, high-risk or low-risk. Be the kind of
            investor
            <br /> you want to be.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-8 px-10">
          {/* Left side with the red boxes */}
          <div className="flex flex-col gap-4 md:w-1/2">
            <div className="flex flex-col p-4 border-2 bg-red-400 rounded-lg text-center">
              <h3 className="text-white text-lg font-semibold">
                Stocks & Intraday
              </h3>
            </div>
            <div className="flex flex-col p-4 border-2 bg-red-400 rounded-lg text-center">
              <h3 className="text-white text-lg font-semibold">
                Mutual funds & SIP
              </h3>
            </div>
            <div className="flex flex-col p-4 border-2 bg-red-400 rounded-lg text-center">
              <h3 className="text-white text-lg font-semibold">
                Futures & Options
              </h3>
            </div>
          </div>

          {/* Right side with the phone image */}
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/stocksBuy.5382418f.webp"
              alt="Phone"
              className="max-w-full h-[750px] object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </Link>
    </>
  );
}

export default Home;
