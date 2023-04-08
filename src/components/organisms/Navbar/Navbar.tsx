import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { ytsLogo } from "@app/assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <nav className="bg-ytsDarkColor">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-end lg:justify-between h-16">
          {/* Logo */}
          <Link to="/" className="hidden lg:flex text-white">
            <img src={ytsLogo} alt="yts-logo" />
          </Link>

          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              <svg
                className={`block h-6 w-6 ${isMenuOpen ? "hidden" : "block"}`}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open. */}
              <svg
                className={`h-6 w-6 ${isMenuOpen ? "block" : "hidden"}`}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Desktop navigation links */}
          <div className="text-white">Search</div>

          <div className="hidden lg:flex lg:items-center lg:w-auto">
            <div className="flex space-x-4">
              <NavLink to="/" className="px-3 py-2">
                {({ isActive, isPending }) => (
                  <span className={isActive ? "text-red-500" : "text-white"}>
                    Home
                  </span>
                )}
              </NavLink>
              <NavLink to="/browse" className="px-3 py-2">
                {({ isActive, isPending }) => (
                  <span className={isActive ? "text-red-500" : "text-white"}>
                    Browse Movies
                  </span>
                )}
              </NavLink>
              <NavLink to="/favourites" className="px-3 py-2">
                {({ isActive, isPending }) => (
                  <span className={isActive ? "text-red-500" : "text-white"}>
                    Favourite Movies
                  </span>
                )}
              </NavLink>
              {/* <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white  rounded-md text-sm font-medium"
              >
                Browse Movies
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="fixed inset-0 flex z-40">
          <div className="fixed inset-0">
            <div className="bg-gray-600 opacity-75"></div>
          </div>
          <div className="relative flex-1 flex flex-col max-w-[160px] w-full bg-white">
            <div className="absolute top-0 right-0 -mr-14 p-1">
              <button
                type="button"
                onClick={toggleMenu}
                className="flex items-center justify-center h-12 w-12"
              >
                <svg
                  className="h-6 w-6 text-white"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="pt-5 pb-4 overflow-y-auto">
              <Link to="/" className="flex-shrink-0 flex items-center px-4">
                <img src={ytsLogo} alt="yts-logo" />
              </Link>

              <nav className="mt-5 px-2 space-y-1">
                <NavLink
                  to="/"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {({ isActive, isPending }) => (
                    <span className={isActive ? "text-red-500" : "text-black"}>
                      Home
                    </span>
                  )}
                </NavLink>
                <NavLink
                  to="/browse"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {({ isActive, isPending }) => (
                    <span className={isActive ? "text-red-500" : "text-black"}>
                      Browse Movies
                    </span>
                  )}
                </NavLink>
                <NavLink
                  to="/favourites"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {({ isActive, isPending }) => (
                    <span className={isActive ? "text-red-500" : "text-black"}>
                      Favourite Movies
                    </span>
                  )}
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
