import React from "react";

const Button = ({ onHandleClick, text }) => {
  return (
    <button
      className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md"
      onClick={onHandleClick}
    >
      {text}
    </button>
  );
};

export default Button;
