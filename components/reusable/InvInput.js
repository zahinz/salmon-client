import React from "react";

const InvInput = ({ className = "", label = "This is label", ...rest }) => {
  return (
    <div className={"w-full " + className}>
      <p className="text-sm text-gray-500 mb-2">{label}</p>
      <input
        className="bg-gray-50 appearance-none border-2 border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        {...rest}
      ></input>
    </div>
  );
};

export default InvInput;
