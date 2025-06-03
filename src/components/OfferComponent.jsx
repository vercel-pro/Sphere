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
              <div className="w-[306px] h-[267px] bg-[#D9D9D9] ms-auto"></div>
            </div>
            <div
              className={`w-[505px] h-[490px] bg-[#F3F4F6] rounded-[21px] pl-[59px] pr-[40px] pt-[58px] pb-[42px] relative`}
            >
              <div className={`w-[217px] absolute left-[59px] bottom-[80px]`}>
                <Button
                  buttonText="Discover Now"
                  bg="bg-[#5E1EE5]"
                  textColor="text-white"
                  isArrowIcon={true}
                />
              </div>
              <h3
                className={`w-[309px] font-bold text-[39px] leading-[41.73px] tracking-[0.78px] pb-[21px]`}
              >
                Control Your Daily Activity On Yourself
              </h3>
              <div className="w-[263px] h-[243px] bg-[#D9D9D9] ms-auto"></div>
            </div>
            <div
              className={`w-[712px] h-[490px] bg-[#F3F4F6] rounded-[21px] pl-[45px] pr-[36px] pt-[58px] pb-[31px] relative`}
            >
              <div className={`w-[217px] absolute right-[29px] bottom-[110px]`}>
                <Button
                  buttonText="Discover Now"
                  bg="bg-[#5E1EE5]"
                  textColor="text-white"
                  isArrowIcon={true}
                />
              </div>
              <h3
                className={`w-[441px] font-bold text-[57px] leading-[66.69px] tracking-[1.14px] text-right mb-6 ms-auto`}
              >
                Travels Light, Sounds Heavy
              </h3>
              <div className="flex justify-between">
                <div className="w-[371px] h-[243px] bg-[#D9D9D9] "></div>
                <p
                  className={`w-[220px] font-["montserrat"] font-semibold text-[23px] leading-[28.75px] tracking-[0.46px] mt-3 text-right`}
                >
                  20+ hours of portable playtime
                </p>
              </div>
            </div>

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
