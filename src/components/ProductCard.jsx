const ProductCard = () => {
  return (
    <div className="p-4 bg-secondaryD rounded-lg">
      <img src="X" alt="X" />
      <h5 className="text-center mb-1">PRODUCT1</h5>
      <div className="flex justify-between gap-4">
        <input type="number" className="w-12 bg-secondary text-text pl-2" />
        <button className="bg-accentD py-1 px-2 rounded-lg">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
