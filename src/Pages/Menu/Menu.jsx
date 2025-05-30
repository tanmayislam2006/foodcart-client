import React, { use, useState } from "react";
import FoodCartContext from "../../Context/FoodCartContext";
import { useNavigate } from "react-router";

const categories = ["All", "Breakfast", "Lunch", "Dinner"];

const Menu = () => {
  const { foodItemsAll } = use(FoodCartContext);
  const navigate = useNavigate();
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
              key={item.id || item._id || idx}
              className="bg-white rounded-2xl shadow-lg p-5 flex flex-col justify-between items-center h-full"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-primary/20"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                {item.name}
              </h3>
              <p className="text-primary font-bold mb-2">${item.price}</p>
              <p className="text-gray-500 text-sm text-center mb-4">
                {item.desc}
              </p>
              <div className="flex gap-3 w-full mt-auto">
                <button
                  onClick={() => navigate(`/dishDetails/${item._id || item.id}`)}
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