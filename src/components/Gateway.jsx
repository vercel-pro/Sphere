import React from "react";
import Container from "./common/Container";
import SearchIcon from "../assets/icons/SearchIcon";
import { Link } from "react-router-dom";
import LogoWhite from "../assets/icons/LogoWhite";
import Stare from "../assets/Illustration/Stare";

const Gateway = () => {
  return (
    <>
      <div className="mt-[105px]">
        <Container>
          <div
            className={`h-[307px] bg-[#212736] rounded-[20px] flex justify-between items-end pt-[62px] pb-[80px] pl-[73px] pr-[51px]`}
          >
            <div className={`w-[473px] relative`}>
              <div className="absolute right-0 bottom-0">
                <Stare />
              </div>
              <h2
                className={`font-["prompt"] font-bold text-[46px] leading-[55.2px] tracking-[0.9px] text-white mb-[17px]`}
              >
                Gateway to a world of innovation with
              </h2>
              <LogoWhite />
            </div>
            <div
              className={`w-[591px] bg-[#EFF0F1] rounded-[20px] pt-5 px-[23px] pb-[11px]`}
            >
              <div className="flex justify-start items-center gap-x-[21px] pl-3">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Search for electronic"
                  className={`w-full py-3 placeholder:font-["montserrat"] text-[21px] placeholder:font-light placeholder:text-[21px] placeholder:text-[#01081A] outline-0`}
                />
              </div>
              <Link
                to={"/"}
                className={`block bg-[#ACE238] py-[11px] text-center rounded-[14px] text-black font-["montserrat"] font-medium text-[17px] capitalize mt-1`}
              >
                Search
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Gateway;
