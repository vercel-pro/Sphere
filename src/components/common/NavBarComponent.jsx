import React from "react";
import Container from "./Container";
import Logo from "../../assets/images/Logo";
import { NavData } from "../../data/NavData";
import { Link } from "react-router-dom";
import Button from "./Button";

const NavBarComponent = () => {
  return (
    <>
      <div className={`mt-[49px] font-montserrat `}>
        <Container>
          <div className={`flex gap-x-[176px] items-center`}>
            <div>
              <Link to={"/"}>
                <Logo />
              </Link>
            </div>
            <div className={`pl-[34px]`}>
              <ul
                className={`flex justify-center items-center gap-x-[57px] text-navText uppercase text-[13px] font-semibold tracking-[1.3px]`}
              >
                {NavData.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={`flex justify-center items-center gap-x-[40px]`}>
              <p
                className={`flex justify-center items-center gap-x-[57px] text-navText uppercase text-[13px] font-semibold tracking-[1.3px]`}
              >
                LOGIN
              </p>
              <Button
                buttonText="Sign Up Now"
                textColor="text-white"
                isArrowIcon={true}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NavBarComponent;
