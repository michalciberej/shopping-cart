import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import {
  mdiCreditCard,
  mdiCash,
  mdiInstagram,
  mdiFacebook,
  mdiTwitter,
  mdiLinkedin,
} from "@mdi/js";

const Footer = () => {
  return (
    <div className="shadow-md bg-secondary dark:bg-secondaryD p-8 mb-12 rounded-xl">
      <h1 className="text-center mb-8 font-bold text-2xl">LOGO IPSUM</h1>
      <div className="flex justify-between sm:justify-around">
        <div className="flex flex-col">
          <h4 className="mb-4 font-bold text">EXPLORE</h4>
          <Link to="/home" className="hover:hover:opacity-80">
            Home
          </Link>
          <Link to="/products" className="hover:hover:opacity-80">
            Products
          </Link>
          <Link to="/contactus" className="hover:hover:opacity-80">
            Contact us
          </Link>
        </div>
        <div>
          <h4 className="mb-4 font-bold">CONNECT WITH US</h4>
          <div className="flex justify-between">
            <button className="hover:hover:opacity-80">
              <Icon path={mdiInstagram} size={1} />
            </button>
            <button>
              <Icon path={mdiFacebook} size={1} className="hover:opacity-80" />
            </button>
            <button>
              <Icon
                path={mdiTwitter}
                size={1}
                className="hover:hover:opacity-80"
              />
            </button>
            <button>
              <Icon
                path={mdiLinkedin}
                size={1}
                className="hover:hover:opacity-80"
              />
            </button>
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-bold">PAYMENT METHODS</h4>
          <div className="flex gap-4">
            <Icon path={mdiCreditCard} size={1} />
            <Icon path={mdiCash} size={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
