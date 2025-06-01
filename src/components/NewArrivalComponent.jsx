import React from "react";
import Container from "./common/Container";
import LeftArrow from "../assets/icons/LeftArrow";
import RightShotArrowIcon from "../assets/icons/RightShotArrowIcon";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import NewArrivalCartComponent from "./NewArrivalCartComponent";

const NewArrivalComponent = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="mt-[86px]">
        <Container>
          <div className="flex justify-between items-center">
            <h2 className="font-prompt font-bold text-[47px] leading-[58.75px] tracking-[-0.94px]">
              New <span className="text-brightPurple">arrival</span> for you
            </h2>
            <div className="flex justify-end items-center gap-x-6">
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
            </div>
          </div>
          <div className="flex justify-between items-center mt-[46px]">
            <div
              className={`w-[321px] pl-6 relative before:content="" before:w-[2px] before:h-[308px] before:bg-[#E2E2E2] before:absolute before:left-0 before:top-1/2 before:-translate-1/2`}
            >
              <ul
                className={`flex flex-col gap-y-[30px] font-["montserrat"] font-medium text-base leading-[20.8px] text-paraColor `}
              >
                <li>
                  Computer & Laptop
                  <span
                    className={`bg-[#1F2537] text-white py-[6px] ml-[18px] font-bold px-3 rounded-md`}
                  >
                    15
                  </span>
                </li>
                <li
                  className={`relative before:content="" before:w-[2px] before:h-[43px] before:bg-brightPurple before:absolute before:-left-6 before:top-1/2 before:-translate-1/2`}
                >
                  Mobile & Phone
                  <span
                    className={`bg-[#AFE638] text-[#1F2537] py-[6px] ml-[18px] font-bold px-3 rounded-md`}
                  >
                    35
                  </span>
                </li>
                <li>
                  Camera Imaging
                  <span
                    className={`bg-[#5E1EE5] text-white py-[6px] ml-[18px] font-bold px-3 rounded-md`}
                  >
                    35
                  </span>
                </li>
                <li>
                  TV & Smart Box
                  <span
                    className={`bg-[#F1F1F2] text-[#1F2537] py-[6px] ml-[18px] font-bold px-3 rounded-md`}
                  >
                    8
                  </span>
                </li>
                <li>
                  Home Appliance
                  <span
                    className={`bg-[#FFE921] text-[#1F2537] py-[6px] ml-[18px] font-bold px-3 rounded-md`}
                  >
                    8
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-[919px]">
              <NewArrivalCartComponent />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewArrivalComponent;
