import React from "react";
import Container from "./common/Container";

const Banner = () => {
  return (
    <>
      <div className="bg-lightGrey mt-[51px]">
        <Container>
          <img src="images/bannerImage.svg" alt="banner" />
        </Container>
      </div>
    </>
  );
};

export default Banner;
