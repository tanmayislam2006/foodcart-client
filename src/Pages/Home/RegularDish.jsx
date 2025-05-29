import React, { use } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import FoodCartContext from "../../Context/FoodCartContext";
import { toast } from "react-toastify";
import { Link } from "react-router";

const RegularDish = () => {
  const { cartItems, setCartItems, foodItemsAll } = use(FoodCartContext);
  const dishes = foodItemsAll.filter((items) => items?.display == "regular");
  const handleOrderNow = (item) => {
    const isExist = cartItems.find((i) => i.id == item.id);
    if (isExist) {
      isExist.quantity += 1;
      const remainningItems = cartItems.filter((i) => i.id !== item.id);

      setCartItems([...remainningItems, isExist]);
    } else {
      item.quantity = 1;
      const cart = [...cartItems, item];
      setCartItems(cart);
      toast.success("Order Placed Succesfully");
    }
  };
  return (
    <section className="w-full py-10 px-2 md:px-0">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">
        Regular Dishes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {dishes.map((dish, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center relative"
          >
            {/* Like Button */}
            <button className="absolute top-4 right-4 text-primary bg-primary/10 rounded-full p-2">
              <FaRegHeart className="text-lg" />
            </button>
            <img
              src={dish.image}
              alt={dish.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-primary/20"
            />
            {/* Rating */}
            <div className="flex items-center mb-2">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="text-sm font-semibold text-gray-700">
                {dish.rating}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {dish.name}
            </h3>
            <p className="text-primary font-bold mb-2">{dish.price}</p>
            <p className="text-gray-500 text-sm text-center mb-4">
              {dish.desc}
            </p>
            <div className="flex gap-3 w-full">
              <Link
                to={`/dishDetails/${dish.id}`}
                className="cursor-pointer flex-1 flex items-center justify-center gap-2 border border-primary text-primary px-4 py-2 rounded-full font-semibold text-sm"
              >
                Details
              </Link>
              <button
                onClick={() => handleOrderNow(dish)}
                className="cursor-pointer flex-1 flex items-center justify-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-semibold text-sm"
              >
                <MdOutlineShoppingCart className="text-lg" />
                Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RegularDish;
