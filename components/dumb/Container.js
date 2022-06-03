import React from "react";

const Container = ({ withHeader = false, children }) => {
  return (
    <div
      className={
        withHeader
          ? "w-screen h-[calc(100vh-64px)] bg-gray-50"
          : "w-screen min-h-screen bg-gray-50"
      }
    >
      <div className="h-full mx-auto py-10 w-[800px]">{children}</div>
    </div>
  );
};

export default Container;
