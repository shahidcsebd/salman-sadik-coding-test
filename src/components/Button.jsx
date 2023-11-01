import React from "react";

const Button = ({ onHandleClick, text, onHandleMouseOver }) => {
  return (
    <button
      className="inline-flex items-center px-4 py-2 bg-base-200 hover:bg-gray-300 text-gray-700 text-sm font-normal rounded-md"
      onClick={onHandleClick}
      onMouseOver={onHandleMouseOver ? () => onHandleMouseOver(true) : null}
    >
      {text}
    </button>
  );
};

export default Button;
