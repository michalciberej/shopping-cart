import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

const CartProduct = ({
  img,
  title,
  quantity,
  price,
  id,
  setCarted,
  carted,
}) => {
  const filterCarted = () => {
    setCarted(carted.filter((obj) => obj.productId != id));
  };
  return (
    <div className="flex gap-4">
      <img src={img} alt={`Picture of ${name}`} className="h-auto w-40" />
      <div className="flex flex-col justify-around">
        <span>{title}</span>
        <div className="flex">
          <span>Amount: {quantity}</span>
        </div>
        <div className="flex">
          <span>Price: {price}$</span>
        </div>
        <button type="button" className="">
          <Icon path={mdiClose} size={1} onClick={filterCarted} />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
