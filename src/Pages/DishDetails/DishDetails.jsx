import React, { use, useState } from "react";
import { useParams } from "react-router";
import FoodCartContext from "../../Context/FoodCartContext";
import { FaStar, FaPlus, FaMinus } from "react-icons/fa";
import { toast } from "react-toastify";

const DishDetails = () => {
  const { foodItemsAll, user } = use(FoodCartContext);
  const { id } = useParams();
  const dish = foodItemsAll.find(item => item._id === id);

  const [quantity, setQuantity] = useState(1);

  if (!dish) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-500 text-xl">
        Dish not found.
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please login to add items to cart");
      return;
    }
    const { _id, ...allInfo } = dish;
    const addToCartItem = {
      dishId: _id,
      ...allInfo,
      uid: user?.uid,
      quantity: quantity,
    };

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
        toast.success("Successfully Added to Cart");
        console.log(data);
      });
  };

  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center bg-primary/5 py-10 px-2">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg p-4 md:p-8 flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full max-w-xs h-64 md:max-w-lg md:h-[28rem] object-cover rounded-xl shadow transition-all duration-300"
          />
        </div>
        {/* Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">{dish.name}</h2>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-500 flex items-center gap-1">
                <FaStar /> {dish.rating}
              </span>
              <span className="text-gray-400 text-sm">| Stock: {dish.stock}</span>
            </div>
            <div className="text-lg text-gray-700 mb-2">{dish.desc}</div>
            <div className="text-gray-500 mb-4">{dish.details}</div>
            <div className="text-2xl font-bold text-primary mb-6">${dish.price}</div>
          </div>
          {/* Quantity & Add to Cart */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                className="bg-primary/10 text-primary rounded-full p-2 hover:bg-primary/20"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                disabled={quantity <= 1}
              >
                <FaMinus />
              </button>
              <input
                type="number"
                min={1}
                max={dish.stock}
                value={quantity}
                onChange={e =>
                  setQuantity(Math.max(1, Math.min(dish.stock, Number(e.target.value))))
                }
                className="w-14 text-center border border-primary/20 rounded px-2 py-1 font-bold"
              />
              <button
                className="bg-primary/10 text-primary rounded-full p-2 hover:bg-primary/20"
                onClick={() => setQuantity(q => Math.min(dish.stock, q + 1))}
                disabled={quantity >= dish.stock}
              >
                <FaPlus />
              </button>
            </div>
            <button
              className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow hover:bg-primary/90 transition w-full sm:w-auto"
              onClick={handleAddToCart}
              disabled={dish.stock === 0}
            >
              {dish.stock === 0 ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DishDetails;