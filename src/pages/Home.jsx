import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import InfoCard from "../components/InfoCard";
import { mdiTruckDeliveryOutline, mdiFaceAgent, mdiQualityHigh } from "@mdi/js";
import Carousel from "../components/Carousel";
import ReviewCard from "../components/ReviewCard";
import { useEffect, useState } from "react";

const Home = () => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const requestedData = await fetch("https://randomuser.me/api/?results=5")
        .then((promise) => promise.json())
        .catch((error) => console.error(error));
      setReviews(requestedData);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <div className="mt-44 mb-24 ">
        <h2 className="text-3xl text-center mb-6">Why Choose Us?</h2>
        <div className="px-8 sm:px-0 grid grid-cols-1 lg:grid-cols-3 container gap-8 mx-auto items-center justify-between">
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
      <Carousel />
      <div className="mb-24">
        <h2 className="text-3xl text-center mb-6">Reviews</h2>
        <div className="px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 sm:px-0">
          {reviews != null ? (
            <ReviewCard
              firstName={reviews.results[0].name.first}
              lastName={reviews.results[0].name.last}
              picture={reviews.results[0].picture.thumbnail}
              rating={5}
            />
          ) : null}
          {reviews != null ? (
            <ReviewCard
              firstName={reviews.results[1].name.first}
              lastName={reviews.results[1].name.last}
              picture={reviews.results[1].picture.thumbnail}
              rating={4}
            />
          ) : null}
          {reviews != null ? (
            <ReviewCard
              firstName={reviews.results[2].name.first}
              lastName={reviews.results[2].name.last}
              picture={reviews.results[2].picture.thumbnail}
              rating={5}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Home;
