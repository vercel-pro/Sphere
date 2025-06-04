import React, { useState } from "react";
import Container from "./common/Container";
import LeftArrow from "../assets/icons/LeftArrow";
import RightShotArrowIcon from "../assets/icons/RightShotArrowIcon";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NewArrivalCartComponent from "./NewArrivalCartComponent";
import { NewArrivalData } from "../data/NewArrivalData";
import { NewArrivalMenuData } from "../data/NewArrivalMenuData";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Link
      className={`w-[55px] h-[55px] flex justify-center items-center border border-black rounded-full transition-all duration-300 hover:border-transparent hover:bg-lightYellowGreen absolute right-[79px] -top-[103px] z-10`}
      onClick={onClick}
    >
      <LeftArrow />
    </Link>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Link
      className={`w-[55px] h-[55px] flex justify-center items-center border border-black rounded-full transition-all duration-300 hover:border-transparent hover:bg-lightYellowGreen absolute right-[0] -top-[103px] z-10`}
      onClick={onClick}
    >
      <RightShotArrowIcon />
      {/* <MdArrowForwardIos /> */}
    </Link>
  );
}

const NewArrivalComponent = () => {
  const [menuData, setMenuData] = useState(NewArrivalMenuData);

  var settings = {
    // centerMode: true,
    // centerPadding: "10px",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleClick = (e) => {
    const indexNumber = parseInt(e.currentTarget.getAttribute("data-index"));
    const updatedMenu = menuData.map((item, index) => ({
      ...item,
      isBefore: index === indexNumber,
    }));
    // console.log(indexNumber, updatedMenu);
    setMenuData(updatedMenu);
  };

  return (
    <>
      <div className="mt-[86px]">
        <Container>
          <div className="flex justify-between items-center">
            <h2 className="font-prompt font-bold text-[47px] leading-[58.75px] tracking-[-0.94px]">
              New <span className="text-brightPurple">arrival</span> for you
            </h2>
            {/* <div className="flex justify-end items-center gap-x-6">
              <Link
                to={"/"}
                className="w-[55px] h-[55px] flex justify-center items-center border border-black rounded-full transition-all duration-300 hover:border-transparent hover:bg-lightYellowGreen"
              >
                <LeftArrow />
              </Link>
              <Link
                to={"/"}
                className="w-[55px] h-[55px] flex justify-center items-center border border-black rounded-full transition-all duration-300 hover:border-transparent hover:bg-lightYellowGreen"
              >
                <RightShotArrowIcon />
              </Link>
            </div> */}
          </div>
          <div className="flex justify-between mt-[46px]">
            <div
              className={`w-[321px] pt-8 pl-6 relative before:content="" before:w-[2px] before:h-[308px] before:bg-[#E2E2E2] before:absolute before:left-0 before:top-5`}
            >
              <ul
                className={`flex flex-col gap-y-[30px] font-["montserrat"] font-medium text-base leading-[20.8px] text-paraColor `}
              >
                {menuData.map((item, index) => (
                  <li
                    key={index}
                    data-index={index}
                    onClick={handleClick}
                    className={`relative ${
                      item.isBefore &&
                      "before:content='' before:w-[2px] before:h-[43px] before:bg-brightPurple before:absolute before:-left-6 before:top-1/2 before:-translate-1/2"
                    }`}
                  >
                    {item.text}
                    <span
                      className={`inline-block ${item.stockBgColor} ${item.textColor} py-[6px] ml-[18px] font-bold px-3 rounded-md`}
                    >
                      35
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[939px]">
              {/* <div className="flex gap-[98px]">
                {NewArrivalData.map((item, index) => (
                  <NewArrivalCartComponent
                    key={index}
                    iconTop={item.iconTop}
                    iconRight={item.iconRight}
                    paddingLeft={item.paddingLeft}
                    paddingRight={item.paddingRight}
                    paddingTop={item.paddingTop}
                    paddingBottom={item.paddingBottom}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    rating={item.rating}
                    totalRating={item.totalRating}
                    buttonText={item.buttonText}
                    buttonBorder={item.buttonBorder}
                  />
                ))}
              </div> */}
              <div className="slider-container ">
                <Slider {...settings} className="justify-center">
                  {NewArrivalData.map((item, index) => (
                    <div className="py-4 px-10">
                      <NewArrivalCartComponent
                        cardWidth="w-[410px]"
                        key={index}
                        iconTop={item.iconTop}
                        iconRight={item.iconRight}
                        paddingLeft={item.paddingLeft}
                        paddingRight={item.paddingRight}
                        paddingTop={item.paddingTop}
                        paddingBottom={item.paddingBottom}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                        rating={item.rating}
                        totalRating={item.totalRating}
                        buttonText={item.buttonText}
                        buttonBorder={item.buttonBorder}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewArrivalComponent;
