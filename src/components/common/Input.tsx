import React from "react";

const Input = ({ placeholder }: { placeholder: string }) => {
  return (
    <input
      type="text"
      className=" border-b border-b-tertiary placeholder:text-primary placeholder:opacity-75 py-4 px-2 text-tertiary w-full focus:border-b-primary  outline-none"
      placeholder={placeholder}
    />
  );
};

export default Input;
