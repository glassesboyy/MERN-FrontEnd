import React from "react";

const Label = ({
  htmlFor,
  children,
  textColor = "text-black",
  margin = "",
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium ${textColor} ${margin}`}
    >
      {children}
    </label>
  );
};

export default Label;
