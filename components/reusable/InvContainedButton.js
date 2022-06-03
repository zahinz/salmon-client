import React, { forwardRef } from "react";

const InvContainedButton = forwardRef(({ children, href, className }, ref) => {
  return (
    <a ref={ref} href={href}>
      <button
        className={
          "rounded-md bg-blue-600 hover:bg-blue-800 text-white text-sm py-2 px-4 " +
          className
        }
      >
        {children}
      </button>
    </a>
  );
});

export default InvContainedButton;
