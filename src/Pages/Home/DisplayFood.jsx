import React, { use} from "react";
import FoodCartContext from "../../Context/FoodCartContext";
import { useNavigate } from "react-router";

const DisplayFood = () => {
  const { foodItemsAll } = use(FoodCartContext);
  const foodItems = foodItemsAll.filter((items) => items?.display === "populer");

const navigate=useNavigate()
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
              onClick={() => navigate(`/dishDetails/${item?._id}`)}
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