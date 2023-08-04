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
  let data = {
    productImg: img,
    productName: name,
    productPrice: price,
    productId: id,
    productQuantity: 1,
  };

  const handleSelect = () => {
    setSelected(data);
  };

  const updateQuntity = (e) => {
    data = { ...data, productQuantity: e.target.value };
  };

  const handleCarted = () => {
    setCarted(carted.concat(data));
  };

  return (
    <div className="flex flex-col justify-between p-4 bg-secondary dark:bg-secondaryD rounded-lg shadow-md">
      <Link to={`../${id}`} onClick={handleSelect}>
        <img src={img} alt="X" className="max-w-xs rounded-md mb-4" />
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
              className="bg-accentD py-1 px-2 rounded-lg"
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
