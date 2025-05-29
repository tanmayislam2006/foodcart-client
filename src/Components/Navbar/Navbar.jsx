import React, { use } from "react";
import { Link, NavLink } from "react-router";
import {
  FaHome,
  FaUtensils,
  FaInfoCircle,
  FaSignInAlt,
  FaUserPlus,
  FaShoppingCart,
  FaSignOutAlt,
  FaTachometerAlt,
  FaCreditCard,
} from "react-icons/fa";
import FoodCartContext from "../../Context/FoodCartContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { firebaseUser, logoutUser } = use(FoodCartContext);
  const handleLogOut = () => {
    logoutUser()
      .then((res) => toast.success("LogOut Succesfully",`${res?.user?.displayName}`))
      .then((err) => console.log(err));
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="w-full bg-white shadow sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-primary tracking-tight">
              Food Cart
            </span>
          </Link>
          {/* Desktop Links */}
          <ul className="hidden lg:flex gap-8 items-center">
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
            {firebaseUser && (
              <>
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
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold text-primary underline flex items-center gap-1"
                        : "text-gray-700 font-semibold flex items-center gap-1"
                    }
                  >
                    <FaTachometerAlt className="inline" /> Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/checkout"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold text-primary underline flex items-center gap-1"
                        : "text-gray-700 font-semibold flex items-center gap-1"
                    }
                  >
                    <FaCreditCard className="inline" /> Checkout
                  </NavLink>
                </li>
              </>
            )}
          </ul>
          {/* Auth Buttons */}
          {firebaseUser ? (
            <div className="dropdown dropdown-end mr-5 hidden md:block cursor-pointer">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar relative group"
              >
                <div className="w-10 rounded-full">
                  <img alt="user" src={firebaseUser?.photoURL} />
                </div>
                <p className="absolute left-1/2 -translate-x-1/2 -bottom-10  bg-gray-800 text-white text-xs rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-50">
                  {firebaseUser?.displayName}
                </p>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-64 p-2 shadow space-y-5 py-2"
              >
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
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold text-primary underline"
                        : "text-gray-700 font-semibold"
                    }
                  >
                    <FaTachometerAlt className="inline mr-2" /> Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/checkout"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold text-primary underline"
                        : "text-gray-700 font-semibold"
                    }
                  >
                    <FaCreditCard className="inline mr-2" /> Checkout
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-bold mt-2"
                  >
                    <FaSignOutAlt /> Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="hidden md:flex gap-3">
              <Link
                to="/login"
                className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-bold"
              >
                <FaSignInAlt /> Login
              </Link>
            </div>
          )}
          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <input id="nav-toggle" type="checkbox" className="hidden peer" />
            <label
              htmlFor="nav-toggle"
              className="cursor-pointer flex flex-col gap-1"
            >
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar relative group"
              >
                <div className="w-10 rounded-full">
                  <img alt="user" src={firebaseUser?.photoURL} />
                </div>
                <p className="absolute left-1/2 -translate-x-1/2 -bottom-10  bg-gray-800 text-white text-xs rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-50">
                  {firebaseUser?.displayName}
                </p>
              </div>
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
                    <FaHome className="inline mr-2 text-2xl" /> Home
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
                    <FaUtensils className="inline mr-2 text-2xl" /> Menu
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
                    <FaInfoCircle className="inline mr-2 text-2xl" /> About
                  </NavLink>
                </li>
                {firebaseUser && (
                  <>
                    <li>
                      <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                          isActive
                            ? "font-bold text-primary underline"
                            : "text-gray-700 font-semibold"
                        }
                      >
                        <FaShoppingCart className="inline mr-2 text-2xl" /> Cart
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                          isActive
                            ? "font-bold text-primary underline"
                            : "text-gray-700 font-semibold"
                        }
                      >
                        <FaTachometerAlt className="inline mr-2 text-2xl" />{" "}
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/checkout"
                        className={({ isActive }) =>
                          isActive
                            ? "font-bold text-primary underline"
                            : "text-gray-700 font-semibold"
                        }
                      >
                        <FaCreditCard className="inline mr-2 text-2xl" />{" "}
                        Checkout
                      </NavLink>
                    </li>
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-bold mt-2"
                      >
                        <FaSignOutAlt className="text-2xl" /> Log Out
                      </button>
                    </li>
                  </>
                )}
                {!firebaseUser && (
                  <li>
                    <Link
                      to="/login"
                      className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-bold mt-2"
                    >
                      <FaSignInAlt className="text-2xl" /> Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* Bottom Mobile Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow lg:hidden">
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
              <FaHome size={28} />
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
              <FaUtensils size={28} />
              <span className="text-xs">Menu</span>
            </NavLink>
          </li>
          {!firebaseUser && (
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "flex flex-col items-center text-primary"
                    : "flex flex-col items-center text-gray-500"
                }
              >
                <FaInfoCircle size={28} />
                <span className="text-xs">About</span>
              </NavLink>
            </li>
          )}
          {firebaseUser && (
            <>
              <li>
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col items-center text-primary"
                      : "flex flex-col items-center text-gray-500"
                  }
                >
                  <FaShoppingCart size={28} />
                  <span className="text-xs">Cart</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col items-center text-primary"
                      : "flex flex-col items-center text-gray-500"
                  }
                >
                  <FaTachometerAlt size={28} />
                  <span className="text-xs">Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/checkout"
                  className={({ isActive }) =>
                    isActive
                      ? "flex flex-col items-center text-primary"
                      : "flex flex-col items-center text-gray-500"
                  }
                >
                  <FaCreditCard size={28} />
                  <span className="text-xs">Checkout</span>
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
