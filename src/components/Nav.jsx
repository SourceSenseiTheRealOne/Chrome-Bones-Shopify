import Link from "next/link";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/shopContext";
import MiniCart from "./MiniCart";
// import MiniCart from "./MiniCart";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import anime from "animejs";

const Nav = () => {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);
  const [rotate, setRotate] = useState(false);
  const [showImages, setShowImages] = useState(false);
  // const [showNav, setShowNav] = useState("");

  let cartQuantity = 0;

  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  const animateNav = () => {
    anime({
      targets: ".animate-bone-nav-image",
      rotate: rotate ? "-=90" : "+=90", // Toggle rotation direction
      duration: 800,
      easing: "easeInOutSine",
    });
    setRotate(!rotate); // Toggle the rotate state
    setShowImages(!showImages);
  };

  // React.useEffect(() => {
  //   window.addEventListener(
  //     "resize",
  //     () => window.innerWidth >= 960 && setOpenNav(false)
  //   );
  // }, []);

  return (
    <div className="absolute top-0 left-0 right-0 z-50 mt-5 flex flex-row justify-between items-center text-center">
      <div className="animate-bone-nav-image" onClick={animateNav}>
        <Image
          src="https://res.cloudinary.com/dzxalfzwh/image/upload/v1713625732/bone-nav.png"
          width={300}
          height={300}
          alt="Background Image"
        />
      </div>
      <div className={`flex flex-row ${showImages ? "" : "hidden"}`}>
        <div>
          <Image
            src="https://res.cloudinary.com/dzxalfzwh/image/upload/v1713817003/nav_text1.1.png"
            width={300}
            height={300}
            alt="Background Image"
          />
        </div>
        <div>
          <Image
            src="https://res.cloudinary.com/dzxalfzwh/image/upload/v1713817004/nav_text2.1.png"
            width={300}
            height={300}
            alt="Background Image"
          />
        </div>
        <div>
          <Image
            src="https://res.cloudinary.com/dzxalfzwh/image/upload/f_auto,q_auto/nav_text6.1"
            width={300}
            height={300}
            alt="Background Image"
          />
        </div>
      </div>
      <div className="mr-8">
        <Image
          src="https://res.cloudinary.com/dzxalfzwh/image/upload/v1713817004/nav_text4.1.png"
          className=""
          width={300}
          height={300}
          alt="Background Image"
        />
      </div>
    </div>
  );

  {
    /* <MiniCart cart={cart} />
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
  */
  }
};

export default Nav;
