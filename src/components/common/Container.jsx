import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div className="w-[1237px] mx-auto border border-dotted border-gray-400">
        {children}
      </div>
    </>
  );
};

export default Container;
