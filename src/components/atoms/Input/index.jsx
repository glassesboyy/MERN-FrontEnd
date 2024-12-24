import React from "react";

const Input = ({
  type = "text",
  name,
  placeholder = "",
  margin = "my-2",
  textSize = "text-base",
  ...props
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`border p-2 border-white/50 rounded-md w-full ${margin} ${textSize} text-white bg-white/10`}
      {...props}
    />
  );
};

export default Input;
