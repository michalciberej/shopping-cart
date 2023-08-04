import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import { Outlet } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState("");
  const [selected, setSelected] = useState(null);
  const [active, setActive] = useState(false);
  const [carted, setCarted] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://dummyjson.com/products/category/laptops?limit=4"
      )
        .then((promise) => promise.json())
        .catch((error) => console.error(error));
      setProducts(data);
    };
    fetchData();
  }, []);

  const handleCategoryShow = (e) => {
    active === false ? setActive(true) : setActive(false);
    if (e.target.id === "category") setActive(false);
  };

  return (
    <>
      <Navbar carted={carted} setCarted={setCarted} />
      <div className="">
        <div className="flex justify-between p-2 items-center mb-12 bg-secondary dark:bg-secondaryD rounded-xl shadow-md p-">
          <div>
            <button className="pl-4" onClick={handleCategoryShow}>
              Categories
            </button>
            {active === true ? (
              <ul
                id="category"
                className="gap-2 absolute bg-secondary dark:bg-secondaryD rounded-lg p-4 shadow-md -translate-x-2"
                onMouseLeave={handleCategoryShow}
              >
                <li className="hover:text-textD hover:bg-accent dark:hover:bg-accentD py-1 pl-2 pr-2 rounded-md">
                  Laptops
                </li>
                <li className="hover:text-textD hover:bg-accent dark:hover:bg-accentD py-1 pl-2 pr-2 rounded-md">
                  Sunglasses
                </li>
                <li className="hover:text-textD hover:bg-accent dark:hover:bg-accentD py-1 pl-2 pr-2 rounded-md">
                  Smartphones
                </li>
              </ul>
            ) : null}
          </div>
          <div className="brightness-95 flex items-center min-w-fit bg-secondary brightness- dark:bg-secondaryD dark:brightness-200 rounded-md">
            <input
              type="search"
              placeholder="Search..."
              className="bg-transparent pl-2 py-1 text-text outline-none"
            />
            <button type="button">
              <Icon path={mdiMagnify} size={1} className="text-text mx-2" />
            </button>
          </div>
        </div>
        <Outlet
          context={
            products != null
              ? [products, selected, setSelected, carted, setCarted]
              : null
          }
        />
      </div>
      <Footer />
    </>
  );
};

export default Products;
