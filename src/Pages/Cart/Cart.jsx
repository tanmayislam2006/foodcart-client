import React, { use, useEffect, useState } from "react";
import FoodCartContext from "../../Context/FoodCartContext";
import { FaEye, FaTrashAlt, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";
import useAxiosSecure from "../../hook/AxiosInseptor";

const Cart = () => {
  const { user, removeFromCart } = use(FoodCartContext);
  // using frinted code show cart item
  const [cartItems, setCartItems] = useState([]);
  const axiosSecure = useAxiosSecure();
  // Fetch cart items from database
  useEffect(() => {
    if (user) {
      axiosSecure
        .get(`http://localhost:5000/cart/${user?.uid}`, {
          withCredentials: true,
        })
        .then((res) => {
          setCartItems(res.data);
        });
    } else {
      setCartItems([]);
    }
  }, [user, axiosSecure]);

  const total = cartItems.length
    ? cartItems
        .reduce(
          (sum, item) => sum + parseFloat(item.price) * (item.quantity || 1),
          0
        )
        .toFixed(2)
    : "0.00";

  return (
    <div className="min-h-screen py-10 px-2 flex flex-col items-center bg-primary/5">
      <div className="w-full max-w-5xl flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-2 text-center flex items-center gap-2">
          <FaShoppingCart className="text-primary" /> Your Cart
        </h1>
        <p className="mb-8 text-gray-500 text-center">
          Review your selected items and proceed to checkout.
        </p>
        {/* Desktop Table */}
        <div className="w-full hidden md:block max-w-5xl border border-gray-200 rounded-lg overflow-x-auto bg-white shadow-lg">
          <table className="min-w-full rounded-lg overflow-hidden">
            <thead>
              <tr className="border-b border-gray-200 bg-primary/10">
                <th className="py-3 px-4 text-left">Image</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-center">Quantity</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-gray-400">
                    No items in your cart.
                  </td>
                </tr>
              ) : (
                cartItems.map((cart, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-100 hover:bg-primary/5 transition"
                  >
                    {/* Image */}
                    <td className="py-3 px-4">
                      {cart?.image ? (
                        <img
                          src={cart.image}
                          alt={cart.name}
                          className="w-16 h-16 object-cover rounded-md shadow"
                        />
                      ) : (
                        <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-md shadow text-gray-400 text-xs">
                          No Image
                        </div>
                      )}
                    </td>
                    {/* Name */}
                    <td className="py-3 px-4 font-semibold">{cart.name}</td>
                    {/* Quantity */}
                    <td className="py-3 px-4 text-center font-semibold">
                      {cart.quantity || 1}
                    </td>
                    {/* Price */}
                    <td className="py-3 px-4 text-primary font-bold">
                      $
                      {(parseFloat(cart.price) * (cart.quantity || 1)).toFixed(
                        2
                      )}
                    </td>
                    {/* Action */}
                    <td className="py-3 px-4 text-center space-x-4">
                      <button
                        className="bg-primary/10 hover:bg-primary/20 text-primary px-3 py-2 rounded-full transition"
                        title="View Details"
                      >
                        <FaEye size={18} />
                      </button>
                      <button
                        className="bg-red-100 hover:bg-red-200 text-red-600 px-3 py-2 rounded-full transition"
                        title="Remove"
                        onClick={() => removeFromCart && removeFromCart(cart)}
                      >
                        <FaTrashAlt size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/* Mobile Cards */}
        <div className="w-full max-w-5xl flex flex-col gap-4 md:hidden mt-6">
          {cartItems.length === 0 ? (
            <div className="rounded-lg shadow p-6 bg-white text-center text-gray-400">
              No items in your cart.
            </div>
          ) : (
            cartItems.map((cart, idx) => (
              <div
                key={idx}
                className="rounded-lg shadow p-4 flex flex-col gap-2 border border-gray-100 bg-white"
              >
                <div className="flex items-center gap-4">
                  {cart?.image ? (
                    <img
                      src={cart.image}
                      alt={cart.name}
                      className="w-16 h-16 object-cover rounded-md shadow"
                    />
                  ) : (
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-md shadow text-gray-400 text-xs">
                      No Image
                    </div>
                  )}
                  <div>
                    <span className="block font-semibold text-gray-800">
                      {cart.name}
                    </span>
                    <span className="block text-sm text-gray-500">
                      Qty: {cart.quantity || 1}
                    </span>
                    <span className="block text-primary font-bold">
                      $
                      {(parseFloat(cart.price) * (cart.quantity || 1)).toFixed(
                        2
                      )}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 mt-2">
                  <button className="flex-1 bg-primary/10 text-primary px-4 py-2 rounded-md font-semibold shadow flex items-center justify-center gap-2">
                    <FaEye /> Details
                  </button>
                  <button
                    className="flex-1 bg-red-100 text-red-600 px-4 py-2 rounded-md font-semibold shadow flex items-center justify-center gap-2"
                    onClick={() => removeFromCart && removeFromCart(cart)}
                  >
                    <FaTrashAlt /> Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {/* Total & Checkout */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between mt-10 gap-4">
          <span className="font-bold text-2xl text-primary">
            Total: ${total}
          </span>
          <Link
            to={"/checkout"}
            className={`bg-primary text-white px-8 py-3 rounded-full font-bold shadow transition hover:bg-primary/90 ${
              cartItems.length === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={cartItems.length === 0}
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
