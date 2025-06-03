import React from "react";
import Container from "./common/Container";
import { ServiceData } from "../data/ServiceData";
import { Link } from "react-router-dom";
import Button from "./common/Button";

const OfferComponent = () => {
  return (
    <>
      <div className={""}>
        <Container>
          <div
            className={`flex flex-wrap gap-[17px] mt-[84px] font-["prompt"]`}
          >
            <div className="w-[610px] h-[490px] pl-[103px] pr-[85px] pt-[53px] pb-[36px] bg-[#F3F4F6] rounded-[21px]">
              <h3
                className={`w-[441px] font-bold text-[39px] leading-[41.73px] tracking-[0.78px] text-center mb-[38px]`}
              >
                Might Sound, Everywhere
              </h3>
              <div className="w-[422px] h-[267px] bg-[#D9D9D9] relative">
                <div
                  className={`w-[217px] absolute left-1/2 bottom-[14px] -translate-x-1/2`}
                >
                  <Button
                    buttonText="Discover Now"
                    bg="bg-[#5E1EE5]"
                    textColor="text-white"
                    isArrowIcon={true}
                  />
                </div>
              </div>
            </div>
            <div className="w-[610px] h-[490px] bg-[#F3F4F6] rounded-[21px] pl-[48px] pr-[55px] pt-[55px] pb-[36px] relative">
              <div className={`w-[217px] absolute right-[49px] top-[62px]`}>
                <Button
                  buttonText="Discover Now"
                  bg="bg-[#5E1EE5]"
                  textColor="text-white"
                  isArrowIcon={true}
                />
              </div>
              <h3
                className={`font-bold text-[56px] leading-[70px] tracking-[1.12px]`}
              >
                20% OFF
              </h3>
              <p
                className={`w-[220px] font-["montserrat"] font-semibold text-[23px] leading-[28.75px] tracking-[0.46px] mt-3`}
              >
                Special Christmas Day Offer
              </p>
              <div className="w-[306px] h-[267px] bg-[#D9D9D9] float-right"></div>
            </div>
            <Link
              to={"/"}
              className="w-[505px] h-[490px] bg-[#F3F4F6] rounded-[21px]"
            ></Link>
            <Link
              to={"/"}
              className="w-[712px] h-[490px] bg-[#F3F4F6] rounded-[21px]"
            ></Link>

            {/* {ServiceData.map((item, index) => (
              <Link
                key={index}
                to={"/"}
                className={`bg-[#F3F4F6] rounded-[21px]`}
              >
                <img src={item.imageSrc} alt="images" />
              </Link>
            ))} */}
          </div>
        </Container>
      </div>
    </>
  );
};

export default OfferComponent;
