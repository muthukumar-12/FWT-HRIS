import React from "react";

const Button = ({ children, onClick, type = "button", variant = "primary"}) => {
  let styles="";
   
  if (variant === "primary2") {
    styles =
      "bg-blue-400 text-white px-4 py-2 rounded-lg font-semibold transition hover:bg-blue-600 hover:shadow-md";
  } else if (variant === "secondary") {
    styles =
      "bg-orange-400 text-white-800 px-4 py-2 rounded-lg font-semibold transition hover:bg-orange-500 hover:shadow-md";
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

export default Button;
