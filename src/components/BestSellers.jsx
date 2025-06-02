import React from "react";
import Container from "./common/Container";
import NewArrivalCartComponent from "./NewArrivalCartComponent";
import IllustrationOne from "../assets/Illustration/IllustrationOne";
import Stare from "../assets/Illustration/Stare";
import { BestSellersData } from "../data/BestSellersData";

const BestSellers = () => {
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
          <div className={`flex items-center`}>
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
              />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default BestSellers;
