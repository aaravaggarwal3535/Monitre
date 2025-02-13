import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const NotFound = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white relative">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 350,
              density: { enable: true, value_area: 600 },
            },
            color: { value: "#ffffff" },
            shape: {
              type: "image",
              stroke: { width: 2, color: "#fff" },
              polygon: { nb_sides: 6 },
              image: {
                src: "images/starburst_white_300_drop_2.png",
                width: 10,
                height: 10,
              },
            },
            opacity: { value: 0.5 },
            size: { value: 5, random: true },
            line_linked: { enable: false },
            move: {
              enable: true,
              speed: { min: 1, max: 3 },
              direction: "bottom",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: { enable: true, mode: "bubble" },
              onclick: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              bubble: { distance: 200, size: 33, duration: 2, opacity: 6, speed: 2 },
              repulse: { distance: 200, duration: 0.25 },
            },
          },
          retina_detect: true,
        }}
        className="absolute top-0 left-0 w-full h-full"
      />

      <div className="flex flex-col md:flex-row items-center z-10 p-6">
        {/* Images */}
        <div className="flex flex-col items-center">
          <img src="/images/cup.svg" alt="Cup" className="w-24 mb-4" />
          <img src="/images/cat.svg" alt="Cat" className="w-40" />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left md:ml-8">
          <h2 className="text-6xl font-bold text-[#04AD83]">404</h2>
          <h3 className="text-2xl font-semibold mt-2">Sorry, Wrong Door.</h3>
          <p className="mt-4 text-gray-300">
            Don't worry, sometimes even we make mistakes. You can find plenty of
            other things on our homepage.
          </p>

          {/* Back Button */}
          <Link to="/">
            <button className="mt-6 px-6 py-3 bg-[#04AD83] text-white rounded-lg hover:bg-green-600 transition">
              Back to Homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
