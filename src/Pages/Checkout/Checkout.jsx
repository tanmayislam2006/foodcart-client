import React, { use, useEffect, useState } from "react";
import FoodCartContext from "../../Context/FoodCartContext";
import { toast } from "react-toastify";

const Checkout = () => {
  const { user } = use(FoodCartContext);
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch cart items from database
  useEffect(() => {
    if (user) {
      fetch(`https://foodcart-server-eight.vercel.app/cart/${user?.uid}`)
        .then((res) => res.json())
        .then((data) => {
          setCartItems(data || []);
        });
    } else {
      setCartItems([]);
    }
  }, [user]);

  const total = cartItems.length
    ? cartItems
        .reduce(
          (sum, item) => sum + parseFloat(item.price) * (item.quantity || 1),
          0
        )
        .toFixed(2)
    : "0.00";

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const form = e.target;
    const formData = new FormData(form);
    const orderData = Object.fromEntries(formData.entries());
    const orderInfo = {
      ...orderData,
      cartItems,
      uid: user?.uid,
    };
    // https://foodcart-server-eight.vercel.app
    fetch("https://foodcart-server-eight.vercel.app/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success(
            "Order placed successfully! Thank you for choosing Food Cart."
          );
          setCartItems([]);
          setSuccess(
            "Order placed successfully! Thank you for choosing Food Cart."
          );
        }
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to place order. Please try again.");
      });

    // reset user cart items
    fetch(`https://foodcart-server-eight.vercel.app/resetCart/${user?.uid}`, {
      method: "DELETE",
    })
  };

  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center bg-primary/5 py-12 px-2">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-10">
        {/* Order Summary */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-primary mb-4 ">
            Order Summary
          </h2>
          <div className="flex flex-col gap-4">
            {cartItems.length === 0 ? (
              <div className="text-gray-400 text-center">
                No items in your cart.
              </div>
            ) : (
              cartItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 border-b pb-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">
                      {item.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      Quantity: {item.quantity || 1}
                    </div>
                    <div className="text-primary font-bold">
                      $
                      {(parseFloat(item.price) * (item.quantity || 1)).toFixed(
                        2
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="mt-6 flex justify-between items-center border-t pt-4">
            <span className="font-bold text-lg text-primary">Total:</span>
            <span className="font-bold text-2xl text-primary">${total}</span>
          </div>
        </div>
        {/* Checkout Form */}
        {cartItems.length !== 0 && (
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Delivery & Payment
            </h2>
            {error && (
              <div className="mb-4 text-red-600 bg-red-50 border border-red-200 rounded p-2 text-sm text-center">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 text-green-600 bg-green-50 border border-green-200 rounded p-2 text-sm text-center">
                {success}
              </div>
            )}

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:border-primary text-gray-700"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:border-primary text-gray-700"
                required
              />
              <input
                name="address"
                type="text"
                placeholder="Delivery Address"
                className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:border-primary text-gray-700"
                required
              />
              <input
                name="phone"
                type="number"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:border-primary text-gray-700"
                required
              />
              <div className="flex gap-2">
                <input
                  name="card"
                  type="text"
                  placeholder="Card Number"
                  className="flex-1 px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:border-primary text-gray-700"
                  required
                />
                <input
                  name="expiry"
                  type="text"
                  placeholder="MM/YY"
                  className="w-24 px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:border-primary text-gray-700"
                  required
                />
                <input
                  name="cvc"
                  type="text"
                  placeholder="CVC"
                  className="w-20 px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:border-primary text-gray-700"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary cursor-pointer text-white font-bold py-3 rounded-lg mt-2 shadow"
                disabled={cartItems.length === 0}
              >
                Place Order
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Checkout;
