import React from "react";

const Title = ({ text }) => {
  return (
    <h1 className="text-center text-3xl font-bold md:text-6xl lg:text-6xl ">
      {text}
    </h1>
  );
};

export default Title;
