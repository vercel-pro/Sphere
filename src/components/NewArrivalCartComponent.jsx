import React, { useState } from "react";
import HeartIcon from "../assets/icons/HeartIcon";
import { MdOutlineStar } from "react-icons/md";
import Button from "./common/Button";
import OffIcon from "./../assets/icons/OffIcon";

const NewArrivalCartComponent = ({
  cardWidth = "w-[410px]",
  // cardHeight = "h-[404px]",
  paddingLeft = "pl-[50px]",
  paddingRight = "pr-[50px]",
  paddingTop = "pt-[99px]",
  paddingBottom = "pb-[50px]",
  iconTop = "top-[28px]",
  iconRight = "right-[30px]",
  title = "Need to add title",
  price = "0.00",
  description = "need to add description",
  rating = 1,
  ratingColor = "text-[#04A904]",
  totalRating = 100,
  buttonText = "Add button text",
  buttonBorder = "border",
  isDiscount = false,
  discountPercentage = "8% off",
  discountAmount = 0,
}) => {
  const [ratingValue, setRatingValue] = useState(
    new Array(rating).fill(rating)
  );

  return (
    <>
      <div className={`${cardWidth}`}>
        <div
          className={`  ${paddingLeft} ${paddingRight} ${paddingTop} ${paddingBottom} bg-linear-(--iconBG) relative shadow-iconShadow rounded-[15px]`}
        >
          <div>
            {isDiscount ? (
              <div className={`absolute ${iconTop} ${iconRight}`}>
                <OffIcon />
                <span
                  className={`font-["montserrat"] font-bold text-[19px] capitalize absolute left-1/2 top-1/2 -translate-1/2`}
                >
                  {discountPercentage}
                </span>
              </div>
            ) : (
              <div
                className={`w-[49px] h-[49px] bg-black rounded-full flex items-center justify-center border border-white shadow-iconShadow absolute ${iconTop} ${iconRight}`}
              >
                <HeartIcon />
              </div>
            )}
          </div>
          <div className={`w-[302px] h-[267px] bg-[#D9D9D9]`}></div>
          {isDiscount && (
            <p
              className={`mt-4 text-center text-[#0177FC] font-["montserrat"] font-bold text-[26px] flex justify-center items-baseline gap-x-[11px]`}
            >
              ${discountAmount}
              <del
                className={`font-medium text-sm text-[#9A9A9A] flex items-center gap-x-1`}
              >
                IDR
                <span>{price}</span>
              </del>
            </p>
          )}
        </div>
        <div>
          <div
            className={`flex justify-between items-center font-["montserrat"] font-extrabold text-[23px] leading-[29.9px] text-[#2C2C2C] mt-[38px] mb-[21px]`}
          >
            <h2>{title}</h2>
            {!isDiscount && <span>${price}</span>}
          </div>
          <p
            className={`flex justify-between items-center font-["montserrat"] font-normal text-lg leading-[27.9px] text-black mb-[19px]`}
          >
            {description}
          </p>
          <div className="flex items-center gap-x-[5.92px] mb-[23px]">
            {ratingValue.map((item, index) => (
              <MdOutlineStar
                key={index}
                className={`text-2xl ${ratingColor}`}
              />
            ))}
            <span>({totalRating})</span>
          </div>
          <Button buttonText={buttonText} bg="bg-white" border={buttonBorder} />
        </div>
      </div>
    </>
  );
};

export default NewArrivalCartComponent;
