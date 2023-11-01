import React from "react";

const InputRadio = ({ id, register, isChecked, children }) => {
  return (
    <div className="flex gap-5 items-center">
      <input
        type="radio"
        name="imageSource"
        id={id}
        value={id}
        className="radio radio-primary"
        {...register("imageSource")}
        defaultChecked={isChecked}
      />
      <label className="font-normal text-md hover:cursor-pointer" htmlFor={id}>
        {children}
      </label>
    </div>
  );
};

export default InputRadio;
