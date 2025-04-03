import React from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

interface ArrowProps {
  direction: "left" | "right";
  onClick?: () => void;
}

const Arrow: React.FC<ArrowProps> = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 text-3xl transition-colors duration-300 
      ${direction === "left" ? "left-[-30px]" : "right-[-30px]"} 
      text-purple-700 hover:text-pink-500`}
    >
      {direction === "left" ? <IoIosArrowDropleft /> : <IoIosArrowDropright  />}
    </button>
  );
};

export default Arrow;
