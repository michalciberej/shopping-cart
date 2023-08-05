import { mdiClose } from "@mdi/js";
import CartProduct from "./CartProduct";
import Icon from "@mdi/react";

const CardSidebar = ({ carted, setCarted, handleCartClick }) => {
  return (
    <>
      <div className="absolute flex flex-col justify-between top-0 right-0 bottom-0 bg-background dark:bg-secondaryD p-8 z-20 overflow-scroll">
        <div>
          <div className="flex justify-between mb-4">
            <span className="text-xl">Cart</span>
            <button type="button" onClick={handleCartClick}>
              <Icon path={mdiClose} size={1} />
            </button>
          </div>
          <div className="mb-4 flex flex-col gap-4 rounded-sm">
            {carted != [] &&
              carted.map((obj) => (
                <CartProduct
                  img={obj.productImg}
                  title={obj.productName}
                  price={obj.productPrice}
                  id={obj.productId}
                  quantity={obj.productQuantity}
                  key={obj.productId}
                  carted={carted}
                  setCarted={setCarted}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h6 className="text-lg">Total:</h6>
            <span className="text-text dark:text-textD">
              {carted != []
                ? carted.reduce(
                    (sum, cur) => sum + cur.productPrice * cur.productQuantity,
                    0
                  )
                : 0}
              $
            </span>
          </div>
          <button
            className="text-textD bg-accent dark:bg-accentD px-4 py-2 rounded-md text-lg hover:invert"
            type="button"
          >
            Checkout
          </button>
        </div>
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
