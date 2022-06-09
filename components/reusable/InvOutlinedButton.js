import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import LoadingSpinner from "../dumb/LoadingSpinner";

const InvOutlinedButton = forwardRef(
  (
    {
      variant,
      fullWidth,
      children,
      href,
      className = "",
      isLoading,
      onClick,
      ...rest
    },
    ref
  ) => {
    const [currentWidth, setCurrentWidth] = useState("unset");
    const buttonRef = useCallback(
      (node) => {
        setCurrentWidth(`${node?.clientWidth}px`);
      },
      [children]
    );

    const mainStyles = `flex justify-center items-center px-4 rounded-md outline outline-2 outline-blue-600 hover:bg-blue-100 text-blue-600 disabled:outline-gray-200 disabled:text-gray-300 disabled:hover:bg-inherit transition ease-in-out `;

    const variantStyles = () => {
      switch (variant) {
        case "small":
          return "min-h-[35px] text-body2 ";

        case "large":
          return "min-h-[65px] text-h6 ";

        default:
          return "min-h-[45px] text-body1 ";
      }
    };

    const fullWidthStyle = (bool) => {
      if (bool) {
        return "w-full ";
      } else {
        return "";
      }
    };

    return (
      <>
        <a ref={ref} href={href} className={"w-full "}>
          <button
            ref={buttonRef}
            style={{ width: isLoading && currentWidth }}
            children={
              isLoading ? (
                <LoadingSpinner className="h-5 fill-blue-600  dark:text-white" />
              ) : (
                children
              )
            }
            onClick={onClick}
            className={
              mainStyles +
              variantStyles() +
              fullWidthStyle(fullWidth) +
              className
            }
            {...rest}
          />
        </a>
        <div></div>
      </>
    );
  }
);

export default InvOutlinedButton;
