import React from "react";
import Container from "./common/Container";
import LeftArrow from "../assets/icons/LeftArrow";
import RightShotArrowIcon from "../assets/icons/RightShotArrowIcon";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NewArrivalCartComponent from "./NewArrivalCartComponent";
import { NewArrivalData } from "../data/NewArrivalData";

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         color: "#303030",
//         fontSize: "20px",
//         border: "1px solid #303030",
//         borderRadius: "50%",
//         width: "40px",
//         height: "40px",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         position: "absolute",
//         left: "calc(50% - 803px)",
//         zIndex: "99",
//       }}
//       onClick={onClick}
//     >
//       {/* <MdArrowBackIosNew /> */}
//     </div>
//   );
// }

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         color: "#303030",
//         fontSize: "20px",
//         border: "1px solid #303030",
//         borderRadius: "50%",
//         width: "40px",
//         height: "40px",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         position: "absolute",
//         left: "calc(50% + 745px)",
//         zIndex: "99",
//       }}
//       onClick={onClick}
//     >
//       {/* <MdArrowForwardIos /> */}
//     </div>
//   );
// }

const NewArrivalComponent = () => {
  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 2000,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  // };
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
              <div className="flex gap-[98px]">
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
              </div>
              {/* <Slider {...settings} className="flex justify-center">
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
                  />
                ))}
              </Slider> */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewArrivalComponent;
