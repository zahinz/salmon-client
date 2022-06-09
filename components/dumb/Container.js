import React from "react";

const Container = ({ className = "", withHeader = false, children }) => {
  return (
    <div
      className={
        withHeader
          ? "w-screen h-[calc(100vh-64px)] bg-gray-100 "
          : "w-screen min-h-screen bg-gray-100 "
      }
    >
      <div className={"h-full mx-auto py-10 w-[800px] " + className}>
        {children}
      </div>
    </div>
  );
};

export default Container;
