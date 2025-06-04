import React from "react";
import Container from "./common/Container";
import NewArrivalCartComponent from "./NewArrivalCartComponent";
import IllustrationOne from "../assets/Illustration/IllustrationOne";
import Stare from "../assets/Illustration/Stare";
import { BestSellersData } from "../data/BestSellersData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BestSellers = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    // autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="mt-24">
        <Container>
          <div className="relative">
            <div className="absolute left-[calc(50%+290px)] -top-3">
              <IllustrationOne />
            </div>
            <div className="absolute left-[calc(50%+515px)] top-4">
              <Stare />
            </div>
          </div>
          <h2 className="font-prompt font-bold text-[47px] leading-[58.75px] tracking-[-0.94px] mb-14">
            Flash sale for <span className="text-brightPurple">best</span>{" "}
            sellers
          </h2>
          <Slider {...settings}>
            {BestSellersData.map((item, index) => (
              <div className="">
                <NewArrivalCartComponent
                  key={index}
                  cardWidth={"w-[390px]"}
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
                  isDiscount={item.isDiscount}
                  discountPercentage={item.discountPercentage}
                  discountAmount={item.discountAmount}
                />
              </div>
            ))}
          </Slider>
          {/* <div className={`flex items-center gap-[20px]`}>
            {BestSellersData.map((item, index) => (
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
                isDiscount={item.isDiscount}
                discountPercentage={item.discountPercentage}
                discountAmount={item.discountAmount}
              />
            ))}
          </div> */}
        </Container>
      </div>
    </>
  );
};

export default BestSellers;
