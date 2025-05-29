import React, { use, useState } from "react";
import FoodCartContext from "../../Context/FoodCartContext";
import { toast } from "react-toastify";

const categories = ["All", "Breakfast", "Lunch", "Dinner"];

const Menu = () => {
  const { cartItems, setCartItems, foodItemsAll } = use(FoodCartContext);
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
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMenu =
    selectedCategory === "All"
      ? foodItemsAll
      : foodItemsAll.filter((item) => item.category === selectedCategory);

  return (
    <section className="w-full min-h-[60vh] bg-primary/5 py-10 px-2">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 text-center">
          Welcome to Our Menu
        </h1>
        {/* Category Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-sm border cursor-pointer ${
                selectedCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-primary border-primary/30"
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
          {filteredMenu.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-primary/20"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                {item.name}
              </h3>
              <p className="text-primary font-bold mb-2">{item.price}</p>
              <p className="text-gray-500 text-sm text-center mb-4">
                {item.desc}
              </p>
              <div className="flex gap-3 w-full">
                <button className="cursor-pointer flex-1 border border-primary text-primary px-4 py-2 rounded-full font-semibold text-sm">
                  Details
                </button>
                <button
                  onClick={() => {
                    handleOrderNow(item);
                  }}
                  className="cursor-pointer flex-1 bg-primary text-white px-4 py-2 rounded-full font-semibold text-sm"
                >
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
        {filteredMenu.length === 0 && (
          <div className="text-center text-gray-500 mt-10">
            No items found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
