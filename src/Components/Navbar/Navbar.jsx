import React from "react";
import { Link, NavLink } from "react-router";
import { FaHome, FaUtensils, FaInfoCircle, FaSignInAlt, FaUserPlus, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      {/* Top Navbar */}
      <nav className="w-full bg-white shadow  sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-primary tracking-tight">Food Cart</span>
          </Link>
          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-primary underline"
                    : "text-gray-700 font-semibold"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-primary underline"
                    : "text-gray-700 font-semibold"
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-primary underline"
                    : "text-gray-700 font-semibold"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-primary underline flex items-center gap-1"
                    : "text-gray-700 font-semibold flex items-center gap-1"
                }
              >
                <FaShoppingCart className="inline" /> Cart
              </NavLink>
            </li>
          </ul>
          {/* Auth Buttons */}
          <div className="hidden md:flex gap-3">
            <Link
              to="/login"
              className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-bold"
            >
              <FaSignInAlt /> Login
            </Link>
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <input id="nav-toggle" type="checkbox" className="hidden peer" />
            <label htmlFor="nav-toggle" className="cursor-pointer flex flex-col gap-1">
              <span className="block w-7 h-1 bg-primary rounded"></span>
              <span className="block w-7 h-1 bg-primary rounded"></span>
              <span className="block w-7 h-1 bg-primary rounded"></span>
            </label>
            {/* Mobile Menu */}
            <div className="absolute left-0 right-0 top-16 bg-white shadow-lg rounded-b-xl py-4 px-6 hidden peer-checked:block">
              <ul className="flex flex-col gap-4">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold text-primary underline"
                        : "text-gray-700 font-semibold"
                    }
                  >
                    <FaHome className="inline mr-2" /> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/menu"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold text-primary underline"
                        : "text-gray-700 font-semibold"
                    }
                  >
                    <FaUtensils className="inline mr-2" /> Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold text-primary underline"
                        : "text-gray-700 font-semibold"
                    }
                  >
                    <FaInfoCircle className="inline mr-2" /> About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold text-primary underline"
                        : "text-gray-700 font-semibold"
                    }
                  >
                    <FaShoppingCart className="inline mr-2" /> Cart
                  </NavLink>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-bold mt-2"
                  >
                    <FaSignInAlt /> Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded-full font-bold"
                  >
                    <FaUserPlus /> Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* Bottom Mobile Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow md:hidden">
        <ul className="flex justify-around items-center py-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col items-center text-primary"
                  : "flex flex-col items-center text-gray-500"
              }
            >
              <FaHome size={22} />
              <span className="text-xs">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col items-center text-primary"
                  : "flex flex-col items-center text-gray-500"
              }
            >
              <FaUtensils size={22} />
              <span className="text-xs">Menu</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col items-center text-primary"
                  : "flex flex-col items-center text-gray-500"
              }
            >
              <FaShoppingCart size={22} />
              <span className="text-xs">Cart</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col items-center text-primary"
                  : "flex flex-col items-center text-gray-500"
              }
            >
              <FaInfoCircle size={22} />
              <span className="text-xs">About</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;