import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const [products, selected, setSelected, carted, setCarted] =
    useOutletContext();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-rows-1 gap-8 mb-12">
      {products &&
        products.products.map((obj) => (
          <ProductCard
            img={obj.images[0]}
            name={obj.title}
            price={obj.price}
            id={obj.id}
            category={obj.category}
            key={obj.id}
            setSelected={setSelected}
            carted={carted}
            setCarted={setCarted}
          />
        ))}
    </div>
  );
};

export default AllProducts;
