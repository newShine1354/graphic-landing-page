import React from "react";

const Button = ({
  content,
  className,
}: {
  content: any;
  className?: string;
}) => {
  return (
    <button
      className={`py-[18px] px-5 text-lg flex items-center bg-[#eb0830] gap-2 rounded-lg ${className}`}
    >
      <p className="font-bold text-white text-center w-full">{content}</p>
    </button>
  );
};

export default Button;
