import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiThemeLightDark } from "@mdi/js";
import { mdiShoppingOutline } from "@mdi/js";
import { mdiMagnify } from "@mdi/js";

const Navbar = () => {
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

  return (
    <nav className="flex justify-between items-center py-4 mb-12 sm:mb-48">
      <h1 className="text-2xl">LOGO IPSUM</h1>
      <div className="flex items-center bg-secondary rounded-md border-2 border-accent">
        <input
          type="search"
          placeholder="Search..."
          className="bg-transparent pl-4 pr-8 py-1 text-text outline-none"
        />
        <button type="button">
          <Icon path={mdiMagnify} size={1} className="text-text mx-2" />
        </button>
      </div>
      <div className="flex gap-6">
        <Link to="/" className="link after:bg-primary">
          Home
        </Link>
        <Link to="Products" className="link after:bg-primary">
          Products
        </Link>
        <button type="button" onClick={handleThemeChange}>
          <Icon path={mdiThemeLightDark} size={1} />
        </button>
        <button type="button">
          <Icon path={mdiShoppingOutline} size={1} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
