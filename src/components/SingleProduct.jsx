import Stars from "./Stars";

const SingleProduct = () => {
  return (
    <div className="container flex gap-12 mb-12 fusti">
      <img
        src="https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?width=660&height=425&fit=crop&format=pjpg&auto=webp"
        alt="X"
        className="max-w-xl rounded-md"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-xl">VERY GOOD PRODUCT XY</h2>
          <Stars rating={4} dir={"row"} />
        </div>
        <div>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni rem
            laboriosam maxime error blanditiis pariatur libero nesciunt
            voluptatibus, voluptatum molestiae nam praesentium aspernatur,
            soluta aliquam doloremque cupiditate. Alias, doloribus illo!
          </span>
        </div>
        <div className="flex gap-8 items-center justify-around mt-4">
          <div className="flex items-end gap-4">
            <span className="line-through">100$</span>
            <span className="text-red-500 text-2xl font-bold">
              {`${Math.floor(Math.random() * 100)}$`}
            </span>
          </div>
          <button className="text-lg px-6 py-2 bg-accentD rounded-md brightness-125">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
