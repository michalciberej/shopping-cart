import { Link } from "react-router-dom";

const ProductCard = ({
  img,
  name,
  price,
  id,
  setSelected,
  carted,
  setCarted,
}) => {
  let productData = {
    productImg: img,
    productName: name,
    productPrice: price,
    productId: id,
    productQuantity: 1,
  };

  const handleSelect = () => {
    setSelected(productData);
  };

  const updateQuntity = (e) => {
    productData = { ...productData, productQuantity: e.target.value };
  };

  const handleCarted = () => {
    if (isProductAlreadyInCart()) {
      const newState = carted.map((obj) => {
        if (obj.productId == id) {
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
    const x = carted.find((obj) => obj.productId === id);
    if (x) return true;
    else return false;
  };

  return (
    <div className="flex flex-col justify-between p-4 bg-secondary dark:bg-secondaryD rounded-lg shadow-md">
      <Link to={`../${id}`} onClick={handleSelect}>
        <img src={img} alt="X" className="max-w-full rounded-md mb-4" />
      </Link>
      <div>
        <h5 className="text-center mb-4 text-xl">{name}</h5>
        <div className="flex justify-between items-end gap-4">
          <span className="text-red-500 text-xl">{price}$</span>
          <div className="flex gap-2">
            <input
              type="number"
              className="w-12 text-text pl-2"
              min="1"
              onChange={updateQuntity}
            />
            <button
              type="button"
              className="text-textD bg-accent dark:bg-accentD py-1 px-2 rounded-lg hover:invert"
              onClick={handleCarted}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
