import React, { useState } from "react";

const InputBox = ({ input, setInput, onInputKeyUp, placeholder }) => {
  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  return (
    <input
      placeholder={placeholder}
      value={input}
      onChange={handleInput}
      onKeyUp={onInputKeyUp}
      className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400 pl-4"
    />
  );
};

export default InputBox;
