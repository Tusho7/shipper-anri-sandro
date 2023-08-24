import React from "react";
import { ButtonProps } from "./types";
const Button: React.FC<ButtonProps> = ({
  text,
  bgColor,
  width,
  height,
  borderRadius,
  boxShadow,
  border,
  color,
}) => {
  console.log(width);
  return (
    <button
      style={{
        height,
        borderRadius,
        boxShadow,
        backgroundColor: bgColor,
        border,
        color,
      }}
      className={`${
        bgColor === "black"
          ? "bg-[#313032] text-white"
          : "transparent text-black border-[1px] border-black"
      } ${width} text-2xl`}
    >
      {text}
    </button>
  );
};

export default React.memo(Button);
