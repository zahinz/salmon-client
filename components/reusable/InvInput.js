import React from "react";

const InvInput = ({
  className = "",
  label = "This is label",
  errorMessage,
  ...rest
}) => {
  return (
    <div className={"w-full " + className}>
      <p className="text-body2 text-gray-500 mb-2">{label}</p>
      <input
        className="bg-gray-50 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 disabled:bg-gray-100"
        {...rest}
      ></input>
      <p className="text-caption text-red-400 mt-2">{errorMessage}</p>
    </div>
  );
};

export default InvInput;
