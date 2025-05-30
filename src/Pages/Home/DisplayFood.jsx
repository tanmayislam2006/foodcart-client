import React, { use, useEffect, useState } from "react";
import FoodCartContext from "../../Context/FoodCartContext";
import { toast } from "react-toastify";

const DisplayFood = () => {
  const { foodItemsAll, user } = use(FoodCartContext);
  const [cartItems, setCartItems] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const foodItems = foodItemsAll.filter((items) => items?.display === "populer");

  // Fetch cart items from database
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/cart/${user?.uid}`)
        .then((res) => res.json())
        .then((data) => {
          setCartItems(data || []);
        });
    } else {
      setCartItems([]);
    }
  }, [user, refresh]);

  const handleOrderNow = (item) => {
    if (!user) {
      toast.error("Please login to add items to cart");
      return;
    }
    const { _id, ...allInfo } = item;
    const addToCartItem = {
      dishId: _id,
      ...allInfo,
      uid: user?.uid,
      quantity: 1,
    };

    // Check if item already exists in cart
    const isExist = cartItems.find((i) => i.dishId === item._id);

    if (isExist) {
      // Only update quantity using PUT
      fetch(`http://localhost:5000/cart/${_id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            toast.success("Quantity increased in cart");
            setRefresh((prev) => !prev);
          }
        });
    } else {
      // Add new item using POST
      fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addToCartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Order Success! Check Cart");
            setRefresh((prev) => !prev);
          }
        });
    }
  };

  return (
    <div className="w-full py-8 px-2 md:px-0">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-2">
        Popular Dishes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-6">
        {foodItems.map((item) => (
          <div
            key={item.id || item._id}
            className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-primary/20"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {item.name}
            </h3>
            <p className="text-primary font-bold mb-2">${item.price}</p>
            <p className="text-gray-500 text-sm text-center mb-4">
              {item.desc}
            </p>
            <button
              onClick={() => handleOrderNow(item)}
              className="cursor-pointer flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full font-semibold text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9l2 9"
                />
              </svg>
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayFood;