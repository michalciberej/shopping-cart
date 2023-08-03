const CardSidebar = () => {
  return (
    <div className="absolute mt-4 -translate-x-28 rounded-lg bg-secondaryD p-8 z-10">
      <div className="flex justify-between mb-4">
        <span>Products</span>
      </div>
      <div className="mb-4">
        {/* {carted != undefined
          ? carted.map((obj) => {
              <CartProduct
                key={obj.id}
                name={obj.title}
                quantity={1}
                img={obj.thumbnail}
              />;
            })
          : null} */}
      </div>
      <button className="bg-accentD px-4 py-2 rounded-md">Checkout</button>
    </div>
  );
};

export default CardSidebar;
