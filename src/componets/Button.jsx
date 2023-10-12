import React from "react";

const Button = ({ bgColor, color, size, text, borderRadius }) => {
  return (
    <butto
      type="button"
      style={{ background: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </butto>
  );
};

export default Button;
