import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Icon from "@mdi/react";
import { mdiMagnify, mdiShoppingOutline } from "@mdi/js";
import { Outlet, Form } from "react-router-dom";
import CardSidebar from "../components/CartSidebar";

const Products = () => {
  const [opened, setOpened] = useState("false");
  const [products, setProducts] = useState("");
  const [selected, setSelected] = useState(null);
  const [active, setActive] = useState(false);
  const [carted, setCarted] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectCategory = (e) => {
    setSelectedCategory(e.target.textContent);
  };

  useEffect(() => {
    const fetchData = async () => {
      const [laptops, smartphones, sunglasses] = await Promise.all([
        fetch("https://dummyjson.com/products/category/laptops?limit=4"),
        fetch("https://dummyjson.com/products/category/fragrances?limit=4"),
        fetch("https://dummyjson.com/products/category/sunglasses?limit=4"),
      ])
        .then((responses) => {
          return Promise.all(responses.map((response) => response.json()));
        })
        .catch((error) => console.error(error));
      const data = laptops;
      data.products = [
        ...laptops.products,
        ...smartphones.products,
        ...sunglasses.products,
      ];
      setProducts(data);
    };
    fetchData();
  }, []);

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "scroll";
  };

  const handleCategoryShow = (e) => {
    active === false ? setActive(true) : setActive(false);
    if (e.target.id === "category") setActive(false);
  };

  const handleCartClick = () => {
    opened === true ? setOpened(false) : setOpened(true);
    opened === true ? enableScroll() : disableScroll();
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
              <div
                id="category"
                className="gap-2 absolute bg-secondary dark:bg-secondaryD rounded-lg p-4 shadow-md -translate-x-2"
                onMouseLeave={handleCategoryShow}
              >
                <button
                  onClick={handleSelectCategory}
                  className="hover:text-textD hover:bg-accent dark:hover:bg-accentD py-1 pl-2 pr-2 rounded-md"
                >
                  Laptops
                </button>
                <button
                  onClick={handleSelectCategory}
                  className="hover:text-textD hover:bg-accent dark:hover:bg-accentD py-1 pl-2 pr-2 rounded-md"
                >
                  Sunglasses
                </button>
                <button
                  onClick={handleSelectCategory}
                  className="hover:text-textD hover:bg-accent dark:hover:bg-accentD py-1 pl-2 pr-2 rounded-md"
                >
                  Smartphones
                </button>
              </div>
            ) : null}
          </div>
          <div className="flex gap-2">
            <Form
              id="search-form"
              role="search"
              className="brightness-95 flex items-center min-w-fit bg-secondary brightness- dark:bg-secondaryD dark:brightness-200 rounded-md"
            >
              <input
                type="search"
                placeholder="Search..."
                className="bg-transparent pl-2 py-1 text-text outline-none"
                name="q"
                aria-label="Seach products"
              />
              <button type="button">
                <Icon path={mdiMagnify} size={1} className="text-text mx-2" />
              </button>
            </Form>
            <button type="button" onClick={handleCartClick}>
              <Icon path={mdiShoppingOutline} size={1} />
            </button>
          </div>
          {opened === true ? (
            <CardSidebar
              carted={carted}
              setCarted={setCarted}
              handleCartClick={handleCartClick}
            />
          ) : null}
        </div>
        <Outlet
          context={
            products != null
              ? [
                  products,
                  selected,
                  setSelected,
                  carted,
                  setCarted,
                  selectedCategory,
                ]
              : null
          }
        />
      </div>
      <Footer />
    </>
  );
};

export default Products;
