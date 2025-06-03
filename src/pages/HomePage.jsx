import Banner from "../components/Banner";
import BestSellers from "../components/BestSellers";
import Gateway from "../components/Gateway";
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
      <Gateway />
    </>
  );
};

export default HomePage;
