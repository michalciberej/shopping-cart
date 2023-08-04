import CartProduct from "./CartProduct";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

const CardSidebar = ({ carted, setCarted, handleCartClick }) => {
  return (
    <>
      <div className="absolute flex flex-col justify-between top-0 right-0 bottom-0 bg-secondaryD p-8 z-20">
        <div>
          <div className="flex justify-between mb-4">
            <span className="text-xl">Products</span>
            <button type="button" onClick={handleCartClick}>
              <Icon path={mdiClose} size={1} />
            </button>
          </div>
          <div className="mb-4 flex flex-col gap-4 rounded-sm">
            {carted != []
              ? carted.map((obj) => (
                  <CartProduct
                    img={obj.productImg}
                    title={obj.productName}
                    price={obj.productPrice}
                    id={obj.productId}
                    key={obj.productId}
                    carted={carted}
                    setCarted={setCarted}
                  />
                ))
              : null}
          </div>
        </div>
        <button className="bg-accentD px-4 py-2 rounded-md">Checkout</button>{" "}
      </div>
      <OverLay handleCartClick={handleCartClick} />
    </>
  );
};

const OverLay = ({ handleCartClick }) => {
  return (
    <div
      className="absolute top-0 right-0 left-0 bottom-0 z-10 bg-black opacity-60"
      onClick={handleCartClick}
    ></div>
  );
};

export default CardSidebar;
