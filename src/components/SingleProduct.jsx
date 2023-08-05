import Stars from "./Stars";
import { useOutletContext } from "react-router-dom";

const SingleProduct = () => {
  const [products, selected, setSelected, carted, setCarted] =
    useOutletContext();

  let productData = {
    productImg: selected.productImg,
    productName: selected.productName,
    productPrice: selected.productPrice,
    productId: selected.productId,
    productQuantity: 1,
  };

  const handleCarted = () => {
    if (isProductAlreadyInCart()) {
      const newState = carted.map((obj) => {
        if (obj.productId == selected.productId) {
          return {
            ...productData,
            productQuantity:
              parseInt(productData.productQuantity) +
              parseInt(obj.productQuantity),
          };
        } else {
          return obj;
        }
      });
      setCarted(newState);
    } else setCarted(carted.concat(productData));
  };

  const isProductAlreadyInCart = () => {
    const x = carted.find((obj) => obj.productId === selected.productId);
    if (x) return true;
    else return false;
  };

  return (
    <div className="container text-center md:text-start flex-col md:flex-row flex gap-4 xs:gap-12 mb-12">
      <img
        src={selected.productImg}
        alt="X"
        className="max-w-xl rounded-md self-center xs:self-start"
      />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col justify-center">
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
        <div className="flex gap-8 flex-col lg:flex-row items-center justify-around mt-4">
          <div className="flex items-end gap-4">
            <span className="line-through">{selected.productPrice * 0.8}$</span>
            <span className="text-red-500 text-2xl font-bold">
              {selected.productPrice}$
            </span>
          </div>
          <button
            className="text-lg px-6 py-2 text-textD bg-accent dark:bg-accentD hover:invert rounded-md brightness-125"
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
