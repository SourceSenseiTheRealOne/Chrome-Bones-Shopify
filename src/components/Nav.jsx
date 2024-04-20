import Link from "next/link";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/shopContext";
import MiniCart from "./MiniCart";
// import MiniCart from "./MiniCart";
// import { FaGithub } from "react-icons/fa";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
// import "../styles/nav.module.css";
import anime from "animejs";

const Nav = () => {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);
  const [rotate, setRotate] = React.useState(false);
  const [showNav, setShowNav] = useState("hidden");

  let cartQuantity = 0;

  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  const animateNav = () => {
    anime({
      targets: ".animate-bone-nav-image",
      rotate: {
        value: 180,
        duration: 1800,
        easing: "easeInOutSine",
      },
      delay: 250,
    });
  };

  // const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 z-50 mt-5 flex flex-row">
      <div
        className="flex-none w-52 animate-bone-nav-image"
        onClick={animateNav}
      >
        <Image
          src="https://res.cloudinary.com/dzxalfzwh/image/upload/v1713625732/bone-nav.png"
          width={300}
          height={300}
          alt="Background Image"
        />
      </div>
      <div className="flex mt-8">
        <nav
          className="flex flex-row bg-invisible border-none special-nav-for-animation"
          id="nav"
        >
          <ul id="nav_ul">
            <li className="mb-2">
              <Link
                href="/"
                className="flex items-center text-xl uppercase font-extrabold text-white"
              >
                My Art
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/"
                className="flex items-center text-xl uppercase font-extrabold text-white"
              >
                My Art
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/"
                className="flex items-center text-xl uppercase font-extrabold text-white"
              >
                My Art
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/"
                className="flex items-center text-xl uppercase font-extrabold text-white"
              >
                My Art
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/"
                className="flex items-center text-xl uppercase font-extrabold text-white"
              >
                My Art
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="ml-auto mr-8 mb-32 flex items-end">
        <Image
          src="https://res.cloudinary.com/dzxalfzwh/image/upload/v1713629480/chrome-bones-cart-text.png"
          className=""
          width={220}
          height={220}
          alt="Background Image"
        />
      </div>
    </div>
  );

  // return (

  //     <a
  //       className="text-md font-bold cursor-pointer"
  //       onClick={() => setCartOpen(!cartOpen)}
  //     >
  //       Cart ({cartQuantity})
  //     </a>
  //     <MiniCart cart={cart} />

  // <div className="absolute top-0 left-0 right-0 z-50 mt-5 flex flex-row">
  //   <div className="flex-none w-1/4">
  //     <Image
  //       src="https://res.cloudinary.com/dzxalfzwh/image/upload/v1713625732/bone-nav.png"
  //       width={250}
  //       height={250}
  //       alt="Background Image"
  //     />
  //   </div>
  //   <div className="flex mt-8">
  //     <nav className="flex flex-row bg-invisible border-none">
  //       <ul>

  //         <li className="mb-2">
  //           <Link href="/" className="flex items-center text-xl uppercase font-extrabold text-white">
  //             My Art
  //           </Link>
  //         </li>
  //         <li className="mb-2">
  //           <Link href="/" className="flex items-center text-xl uppercase font-extrabold text-white">
  //             My Art
  //           </Link>
  //         </li>
  //         <li className="mb-2">
  //           <Link href="/" className="flex items-center text-xl uppercase font-extrabold text-white">
  //             My Art
  //           </Link>
  //         </li>
  //         <li className="mb-2">
  //           <Link href="/" className="flex items-center text-xl uppercase font-extrabold text-white">
  //             My Art
  //           </Link>
  //         </li>
  //         <li>
  //           <Link href="/" className="flex items-center text-xl uppercase font-extrabold text-white">
  //             My Art
  //           </Link>
  //         </li>
  //       </ul>

  //     </nav>
  //   </div>

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
  {
    /* <div className="flex  justify-items-end">
    <Image
      src="https://res.cloudinary.com/dzxalfzwh/image/upload/v1713625084/all-characters-home-page.png"
      className=""
      width={400}
      height={400}
      alt="Background Image"
    />
  </div>
    </div>
  ); */
  }
};

export default Nav;
