import Banner from "../components/Banner";
import BestSellers from "../components/BestSellers";
import NewArrivalComponent from "../components/NewArrivalComponent";
import OfferComponent from "../components/OfferComponent";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Services />
      <NewArrivalComponent />
      <OfferComponent />
      <BestSellers />
    </>
  );
};

export default HomePage;
