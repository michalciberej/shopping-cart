import { Link } from "react-router-dom";
import { mdiThemeLightDark } from "@mdi/js";
import Icon from "@mdi/react";

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
    <nav className="flex justify-between items-center py-4">
      <h1 className="text-2xl font-bold">LOGO IPSUM</h1>

      <div className="flex gap-6">
        <Link to="/" className="link after:bg-primary">
          Home
        </Link>
        <Link to="/products/all" className="link after:bg-primary">
          Products
        </Link>
        <button type="button" onClick={handleThemeChange}>
          <Icon path={mdiThemeLightDark} size={1} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
