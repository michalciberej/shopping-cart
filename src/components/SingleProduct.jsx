import Stars from "./Stars";
import { useOutletContext } from "react-router-dom";

const SingleProduct = () => {
  const [products, selected, setSelected, carted, setCarted] =
    useOutletContext();

  const handleCarted = () => {
    setCarted(carted.concat(selected));
  };

  return (
    <div className="container flex gap-12 mb-12">
      <img src={selected.productImg} alt="X" className="max-w-xl rounded-md" />
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-xl">{selected.productName}</h2>
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
            <span className="line-through">{selected.productPrice * 0.8}</span>
            <span className="text-red-500 text-2xl font-bold">
              {selected.productPrice}
            </span>
          </div>
          <button
            className="text-lg px-6 py-2 bg-accentD rounded-md brightness-125"
            onClick={handleCarted}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
