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
      <div className={`py-[105px] relative`}>
        <img
          src="images/Illustration-1.png"
          alt="Illustration"
          className="absolute left-0 top-[69px]"
        />
        <div className={`absolute left-[calc(50% - 10%)] top-[103px]`}>
          <Stare />
        </div>
        <div className={`absolute right-0 top-[86px]`}>
          <Stare width="22" height="22" />
        </div>
        <div className={`absolute right-0 top-[103px]`}>
          <IllustrationOne />
        </div>
        <Container>
          <h2 className={`font-prompt font-extrabold text-[74px] text-center`}>
            What <span className="text-brightPurple">we</span> provide?
          </h2>
          <div className="font-montserrat flex justify-between items-center mt-[51px]">
            <div className="w-[118px] flex flex-col gap-y-6 items-center">
              <div
                className={`w-[85px] h-[85px] flex justify-center items-center rounded-full bg-white  computerIcon`}
              >
                <ComputerIcon />
              </div>
              <span className="text-center">Computer & Laptop</span>
            </div>
            <div className="w-[118px] flex flex-col gap-y-6 items-center">
              <div
                className={`w-[85px] h-[85px] flex justify-center items-center rounded-full bg-white  computerIcon`}
              >
                <MobileIcon />
              </div>
              <span className="text-center">Computer & Laptop</span>
            </div>
            <div className="w-[118px] flex flex-col gap-y-6 items-center">
              <div
                className={`w-[85px] h-[85px] flex justify-center items-center rounded-full bg-white  computerIcon`}
              >
                <Camera />
              </div>
              <span className="text-center">Computer & Laptop</span>
            </div>
            <div className="w-[118px] flex flex-col gap-y-6 items-center">
              <div
                className={`w-[85px] h-[85px] flex justify-center items-center rounded-full bg-white  computerIcon`}
              >
                <TVIcon />
              </div>
              <span className="text-center">Computer & Laptop</span>
            </div>
            <div className="w-[118px] flex flex-col gap-y-6 items-center">
              <div
                className={`w-[85px] h-[85px] flex justify-center items-center rounded-full bg-white  computerIcon`}
              >
                <HomeAppliance />
              </div>
              <span className="text-center">Computer & Laptop</span>
            </div>
            <div className="w-[118px] flex flex-col gap-y-6 items-center">
              <div
                className={`w-[85px] h-[85px] flex justify-center items-center rounded-full bg-white  computerIcon`}
              >
                <AccessoriesIcon />
              </div>
              <span className="text-center">Computer & Laptop</span>
            </div>
            <div className="w-[118px] flex flex-col gap-y-6 items-center">
              <div
                className={`w-[85px] h-[85px] flex justify-center items-center rounded-full bg-white  computerIcon`}
              >
                <GameIcon />
              </div>
              <span className="text-center">Computer & Laptop</span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Services;
