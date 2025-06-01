import React from "react";

const Stare = ({ width = "27", height = "27" }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 0C14.8895 6.79798 20.202 12.1105 27 13.5C20.202 14.8895 14.8895 20.202 13.5 27C12.1105 20.202 6.79798 14.8895 0 13.5C6.79798 12.1105 12.1105 6.79798 13.5 0Z"
          fill="#2DBE5F"
        />
      </svg>
    </>
  );
};

export default Stare;
