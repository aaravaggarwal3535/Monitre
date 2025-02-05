import React from 'react';

const Header = () => {
  return (
    <nav className="bg-white border-b border-gray-200  fixed w-full z-10">
      <div className="mx-auto px-4 sm:px-2 justify-center   items-center lg:">
        <div className="flex justify-between items-start  h-16">
          {/* Logo - Top Left */}
          <div className="flex items-start">
            <a href="/" className="">
              <img
                className="h-20 w-auto"
                src="/logo.png" // Update with your logo path
                alt="Logo"
              />
            </a>
          </div>

          {/* Auth Buttons - Top Right */}
          <div className="flex items-start space-x-4 pt-4">
            <a
              href="/login"
              className="text-gray-600 hover:text-[#04AD83] pt-1.5 text-l font-medium"
            >
              Log In
            </a>
            <a
              href="/signup"
              className="bg-[#04AD83] text-white px-4 py-2 mb-0.5 rounded-md text-sm font-medium hover:bg-green-700 transition-colors"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;