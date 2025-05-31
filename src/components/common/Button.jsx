import React from "react";
import { Link } from "react-router-dom";
import RighArrowIcon from "../../assets/images/svgImages/RighArrowIcon";

const Button = ({
  buttonText = "Add button text",
  bg = `bg-black`,
  textColor = "text-black",
  paddingTB = "py-4",
  paddingLR = "px-[37px]",
  rounded = "rounded-[52px]",
}) => {
  return (
    <>
      <Link
        to={"/"}
        className={`${bg} ${textColor} ${paddingTB} ${paddingLR} ${rounded} flex justify-center items-center gap-x-[13px]`}
      >
        {buttonText} <RighArrowIcon />
      </Link>
    </>
  );
};

export default Button;
