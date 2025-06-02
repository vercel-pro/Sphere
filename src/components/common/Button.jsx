import React from "react";
import { Link } from "react-router-dom";
import RightArrowIcon from "./../../assets/icons/RightArrowIcon";
import CartIcon from "../../assets/icons/CartIcon";

const Button = ({
  buttonText = "Add button text",
  bg = `bg-black`,
  textColor = "text-black",
  paddingTB = "py-4",
  paddingLR = "px-[37px]",
  border = "",
  rounded = "rounded-[52px]",
  isArrowIcon = false,
}) => {
  return (
    <>
      <Link
        to={"/"}
        className={`${bg} ${textColor} ${paddingTB} ${paddingLR} ${border} ${rounded} inline-flex justify-center items-center gap-x-[13px] font-['Montserrat'] font-medium text-center`}
      >
        {!isArrowIcon && <CartIcon />} {buttonText}{" "}
        {isArrowIcon && <RightArrowIcon />}
      </Link>
    </>
  );
};

export default Button;
