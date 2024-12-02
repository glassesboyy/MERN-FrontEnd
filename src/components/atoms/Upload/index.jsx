import React from "react";

const Upload = ({
  name,
  accept = "*",
  margin = "my-2",
  textSize = "text-base",
  ...props
}) => {
  return (
    <div className={`w-full ${margin}`}>
      <input
        type="file"
        name={name}
        id={name}
        accept={accept}
        className={`border p-2 rounded-md w-full text-black bg-white`}
        {...props}
      />
    </div>
  );
};

export default Upload;
