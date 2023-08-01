import { useEffect, useState } from "react";

const Banner = () => {
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://dummyjson.com/products/category/sunglasses?limit=5"
      )
        .then((response) => response.json())
        .catch((error) => {
          console.error(error);
        });
      setFetchedData(data.products[1].thumbnail);
    };
    fetchData();
  }, []);

  return (
    <div className="sm:p-6 md:p-0 flex justify-between">
      <div className="flex flex-col sm:justify-around gap-10 sm:gap-0">
        <h1 className="text-5xl font-bold text-center sm:text-start">
          Try Our New Awesome{" "}
          <span className="text-5xl bg-gradient-to-r from-primary to-accentD bg-clip-text text-transparent font-extrabold">
            PRODUCT
          </span>{" "}
        </h1>
        <span className="text-2xl text-center sm:text-start sm:px-0 px-20">
          Choosing our quality products was never easier.
          <br />
          Use our new online store.
        </span>
        <div className="flex gap-6 justify-center sm:justify-start">
          <button
            type="button"
            className="text-xl transition-all text-text px-12 py-4 bg-primary rounded-lg hover:shadow-2xl hover:shadow-primary hover:-translate-y-1"
          >
            Buy
          </button>
          <button
            type="button"
            className="text-xl transition-transform text-text dark:text-textD px-6 py-4 bg-secondary dark:bg-secondaryD rounded-lg hover:opacity-80 hover:-translate-y-1"
          >
            See Details
          </button>
        </div>
      </div>
      <div className="hidden sm:block">
        <img
          src={fetchedData}
          alt="picture"
          className=" rounded-md shadow-md shadow-backgroundD dark:shadow-background"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Banner;
