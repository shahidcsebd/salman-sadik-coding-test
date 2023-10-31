import React from "react";

const Label = ({ children }) => {
  return (
    <label className="text-lg font-medium" htmlFor="name">
      {children}
    </label>
  );
};

export default Label;
