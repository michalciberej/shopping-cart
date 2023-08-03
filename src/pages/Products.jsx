import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { Outlet } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://dummyjson.com/products/category/laptops?limit=5"
      )
        .then((promise) => promise.json())
        .catch((error) => console.error(error));
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar carted={products} />
      <div className="flex ">
        <div className="bg-secondary dark:bg-secondaryD rounded-xl shadow-md p-2">
          <div className="mb-4 flex items-center min-w-fit bg-secondary rounded-md border-2 border-accent">
            <input
              type="search"
              placeholder="Search..."
              className=" bg-transparent pl-2 py-1 text-text outline-none"
            />
            <button type="button">
              <Icon path={mdiMagnify} size={1} className="text-text mx-2" />
            </button>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-textD hover:bg-accent dark:hover:bg-accentD py-1 pl-2 rounded-md">
              Laptops
            </li>
            <li className="hover:text-textD hover:bg-accent dark:hover:bg-accentD py-1 pl-2 rounded-md">
              Sunglasses
            </li>
            <li className="hover:text-textD hover:bg-accent dark:hover:bg-accentD py-1 pl-2 rounded-md">
              Smartphones
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Products;
