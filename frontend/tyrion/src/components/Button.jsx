import React from "react";

function Button({
  children,
  width,
  height,
  color,
  bg,
  border,
  navigate,
  onClick,
  radius,
}) {
  return (
    <button
      className={`${width} ${height} ${color} ${bg} ${border} ${radius} `}
      onClick={onClick}
      navigate={navigate}
    >
      {children}
    </button>
  );
}

export default Button;
