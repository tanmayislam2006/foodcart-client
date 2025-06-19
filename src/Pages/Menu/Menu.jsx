import React, { useEffect, useState } from "react";
import FoodCartContext from "../../Context/FoodCartContext";
import { useNavigate } from "react-router";
import axios from "axios";

const categories = ["All", "Breakfast", "Lunch", "Dinner"];

const Menu = () => {
  const [foodItemsAll, setFoodItemsAll] = useState([]);
  const totalItems = 34;
  const [perPageItem, setPerPaegeItem] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(totalItems / perPageItem);
  const allPages = [...Array(pages).keys()];
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    axios
      .get(
        `https://foodcart-server-eight.vercel.app/allMenu?item=${perPageItem}&page=${currentPage-1}&category=${selectedCategory}`
      )
      .then((res) => setFoodItemsAll(res.data));
  }, [perPageItem, currentPage, selectedCategory]);
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
          {foodItemsAll.map((item, idx) => (
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
                  onClick={() =>
                    navigate(`/dishDetails/${item._id || item.id}`)
                  }
                  className="cursor-pointer flex-1 bg-primary text-white px-4 py-2 rounded-full font-semibold text-sm"
                >
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
        {foodItemsAll.length === 0 && (
          <div className="text-center text-gray-500 mt-10">
            No items found in this category.
          </div>
        )}
      </div>
      <div className="flex gap-2 justify-center my-10">
        {allPages.map((p) => {
          return (
            <button
              onClick={() => setCurrentPage(p+1)}
              className={`btn ${currentPage === p+1 ? "btn-primary" : ""}`}
              key={p}
            >
              {p+1}
            </button>
          );
        })}
        <select
          name="pagePerItem"
          onChange={(e) => {
            setPerPaegeItem(e.target.value);
            setCurrentPage(1);
          }}
          defaultValue={perPageItem}
          id=""
        >
          {[4,6, 8, 10, 20].map((op) => {
            return <option value={op}>{op}</option>;
          })}
        </select>
      </div>
    </section>
  );
};

export default Menu;
