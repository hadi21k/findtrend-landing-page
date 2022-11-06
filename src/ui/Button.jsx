import React from "react";

const Button = ({ text, color }) => {
  return (
    <button
      aria-color={color}
      className="rounded-3xl py-2 text-center font-semibold transition duration-300 aria-[color=white]:w-[110px] aria-[color=primary]:w-[150px] aria-[color=white]:bg-white aria-[color=primary]:bg-primary aria-[color=black]:bg-black aria-[color=primary]:text-black aria-[color=white]:text-black aria-[color=black]:text-white aria-[color=primary]:hover:bg-hover"
    >
      {text}
    </button>
  );
};

export default Button;
