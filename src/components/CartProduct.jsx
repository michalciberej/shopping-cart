const CartProduct = ({ img, title, quantity, price }) => {
  return (
    <div className="flex gap-4">
      <img src={img} alt={`Picture of ${name}`} />
      <div>
        <span>{title}</span>
        <div className="flex">
          <span>Amount: </span>
          <span>{quantity}</span>
        </div>
        <div className="flex">
          <span>Price:</span>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
