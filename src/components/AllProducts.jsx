import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const products = useOutletContext();

  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-8 mb-12">
      {products &&
        products.products.map((obj) => (
          <ProductCard
            img={obj.images[3]}
            name={obj.title}
            price={obj.price}
            key={obj.id}
          />
        ))}
    </div>
  );
};

export default AllProducts;
