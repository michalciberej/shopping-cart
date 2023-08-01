import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import InfoCard from "../components/InfoCard";
import { mdiTruckDeliveryOutline, mdiFaceAgent, mdiQualityHigh } from "@mdi/js";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="my-44 ">
        <h2 className="text-3xl text-center mb-6">Why Choose Us?</h2>
        <div className="px-8 sm:px-0 grid grid-cols-1 sm:grid-cols-3 container gap-8 mx-auto items-center justify-between break-words">
          <InfoCard
            heading="Fast delivery"
            info="We are colaborating with deliveryServiceOne and deliveryServiceTwo to bring the fastest delivery possible."
            icon={mdiTruckDeliveryOutline}
          />
          <InfoCard
            heading="Quality products"
            info="Our products are made with the highest quality materials and recently we brought our products manufacturing process to us."
            icon={mdiQualityHigh}
          />
          <InfoCard
            heading="Customer service"
            info="Our customer service is online 24/7 to help you with any troubles you got."
            icon={mdiFaceAgent}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
