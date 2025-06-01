import React from "react";
import Container from "./common/Container";
import IllustrationOne from "../assets/Illustration/IllustrationOne";
import Stare from "../assets/Illustration/Stare";
import ComputerIcon from "../assets/icons/ComputerIcon";
import MobileIcon from "../assets/icons/MobileIcon";
import TVIcon from "../assets/icons/TVIcon";
import HomeAppliance from "../assets/icons/HomeAppliance";
import AccessoriesIcon from "../assets/icons/AccessoriesIcon";
import GameIcon from "../assets/icons/GameIcon";
import Camera from "../assets/icons/Camera";

const Services = () => {
  return (
    <>
      <div className={`pt-[105px] relative`}>
        <img
          src="images/Illustration-1.png"
          alt="Illustration"
          className="absolute left-0 top-[69px]"
        />
        <div className={`absolute left-[calc(50%-530px)] top-[103px]`}>
          <Stare />
        </div>
        <div className={`absolute right-[calc(50%-574px)] top-[86px]`}>
          <Stare width="22" height="22" />
        </div>
        <div className={`absolute right-[calc(50%-548px)] top-[148px]`}>
          <IllustrationOne />
        </div>
        <Container>
          <h2 className={`font-prompt font-extrabold text-[74px] text-center`}>
            What <span className="text-brightPurple">we</span> provide?
          </h2>
          <div className="font-montserrat text-lg leading-[23.4px] text-paraColor flex justify-between items-center mt-[51px]">
            <div className="w-[118px] flex flex-col gap-y-6 items-center">
              <div
                className={`w-[85px] h-[85px] flex justify-center items-center rounded-full bg-linear-(--iconBG)  shadow-iconShadow`}
              >
                <ComputerIcon />
              </div>
              <span className="text-center">Computer & Laptop</span>
            </div>
            <div className="w-[118px] flex flex-col gap-y-6 items-center">
              <div
                className={`w-[85px] h-[85px] flex justify-center items-center rounded-full bg-linear-(--iconBG)  shadow-iconShadow`}
              >
                <MobileIcon />
              </div>
              <span className="text-center">Mobile & Phone</span>
            </div>
            <div className="w-[118px] flex flex-col gap-y-6 items-center">
              <div
                className={`w-[85px] h-[85px] flex justify-center items-center rounded-full bg-linear-(--iconBG)  shadow-iconShadow`}
              >
                <Camera />
              </div>
              <span className="text-center">Camera</span>
            </div>
            <div className="w-[118px] flex flex-col gap-y-6 items-center">
              <div
                className={`w-[85px] h-[85px] flex justify-center items-center rounded-full bg-linear-(--iconBG)  shadow-iconShadow`}
              >
                <TVIcon />
              </div>
              <span className="text-center">TV & Smart Box</span>
            </div>
            <div className="w-[118px] flex flex-col gap-y-6 items-center">
              <div
                className={`w-[85px] h-[85px] flex justify-center items-center rounded-full bg-linear-(--iconBG)  shadow-iconShadow`}
              >
                <HomeAppliance />
              </div>
              <span className="text-center">Home Appliance</span>
            </div>
            <div className="w-[118px] flex flex-col gap-y-6 items-center">
              <div
                className={`w-[85px] h-[85px] flex justify-center items-center rounded-full bg-linear-(--iconBG)  shadow-iconShadow`}
              >
                <AccessoriesIcon />
              </div>
              <span className="text-center">Accessories</span>
            </div>
            <div className="w-[118px] flex flex-col gap-y-6 items-center">
              <div
                className={`w-[85px] h-[85px] flex justify-center items-center rounded-full bg-linear-(--iconBG)  shadow-iconShadow`}
              >
                <GameIcon />
              </div>
              <span className="text-center">Other Categories</span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Services;
