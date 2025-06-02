import React from "react";
import Container from "./common/Container";
import { ServiceData } from "../data/ServiceData";
import { Link } from "react-router-dom";

const OfferComponent = () => {
  return (
    <>
      <div className={""}>
        <Container>
          <div className="flex flex-wrap gap-[17px] mt-[84px]">
            {/*             
            
            <Link
              to={"/"}
              className="w-[610px] h-[490px] bg-[#F3F4F6] rounded-[21px]"
            ></Link>
            <Link
              to={"/"}
              className="w-[610px] h-[490px] bg-[#F3F4F6] rounded-[21px]"
            ></Link>
            <Link
              to={"/"}
              className="w-[505px] h-[490px] bg-[#F3F4F6] rounded-[21px]"
            ></Link>
            <Link
              to={"/"}
              className="w-[712px] h-[490px] bg-[#F3F4F6] rounded-[21px]"
            ></Link> 
            
            */}

            {ServiceData.map((item, index) => (
              <Link to={"/"} className={`bg-[#F3F4F6] rounded-[21px]`}>
                <img src={item.imageSrc} alt="images" />
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default OfferComponent;
