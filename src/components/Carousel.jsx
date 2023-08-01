import { useEffect } from "react";
import { useState } from "react";

const Carousel = () => {
  const [fetchedData, setFetchedData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const requestedData = await fetch(
        "https://dummyjson.com/products/category/laptops?limit=5"
      )
        .then((promise) => promise.json())
        .catch((error) => {
          console.error(error);
        });
      setFetchedData(requestedData);
    };
    fetchData();
  }, []);

  return (
    <div className="mb-24 px-8 md:px-0">
      <h1 className="text-3xl text-center mb-6">Bestsellers</h1>
      <div className="flex overflow-hidden gap-8">
        <img
          src={fetchedData != "" ? fetchedData.products[0].thumbnail : null}
          alt=""
          className="carouselImg"
          loading="lazy"
        />
        <img
          src={fetchedData != "" ? fetchedData.products[1].thumbnail : null}
          alt=""
          className="carouselImg"
          loading="lazy"
        />
        <img
          src={fetchedData != "" ? fetchedData.products[2].thumbnail : null}
          alt=""
          className="carouselImg"
          loading="lazy"
        />
        <img
          src={fetchedData != "" ? fetchedData.products[3].thumbnail : null}
          alt=""
          className="carouselImg"
          loading="lazy"
        />
        <img
          src={fetchedData != "" ? fetchedData.products[0].thumbnail : null}
          alt=""
          className="carouselImg"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Carousel;
