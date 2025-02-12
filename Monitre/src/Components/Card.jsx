// Card.jsx
import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex justify-end"></div>
    </div>
  );
};

export default Card;
