import { Link } from "react-router-dom";
import { mdiThemeLightDark, mdiShoppingOutline, mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import CardSidebar from "./CartSidebar";
import { useState } from "react";

const Navbar = () => {
  const [opened, setOpened] = useState("false");

  const handleThemeChange = () => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.add("light");
    } else if (localStorage.theme === "light" || !localStorage.theme) {
      localStorage.theme = "dark";
      document.querySelector("html").classList.remove("light");
      document.querySelector("html").classList.add("dark");
    }
  };

  const handleCartClick = () => {
    opened === true ? setOpened(false) : setOpened(true);
  };
  return (
    <nav className="flex justify-between items-center py-4">
      <h1 className="text-2xl">LOGO IPSUM</h1>

      <div className="flex gap-6">
        <Link to="/home" className="link after:bg-primary">
          Home
        </Link>
        <Link to="/products" className="link after:bg-primary">
          Products
        </Link>
        <button type="button" onClick={handleThemeChange}>
          <Icon path={mdiThemeLightDark} size={1} />
        </button>
        <div>
          <button type="button" onClick={handleCartClick}>
            <Icon path={mdiShoppingOutline} size={1} />
          </button>
          {opened === true ? <CardSidebar /> : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
