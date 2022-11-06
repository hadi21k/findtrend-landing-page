import { useState } from "react";

const Radio = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div
      onClick={() => setToggle(!toggle)}
      className="h-10 w-20 cursor-pointer rounded-3xl bg-white p-1"
    >
      <div
        aria-toggle={toggle}
        className="h-full w-1/2 rounded-full bg-primary transition-all duration-300 ease-in-out aria-[toggle=true]:translate-x-0 aria-[toggle=false]:translate-x-full"
      ></div>
    </div>
  );
};

export default Radio;
