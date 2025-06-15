import React, { use } from "react";
import FoodCartContext from "../../Context/FoodCartContext";
import axios from "axios";
import { toast } from "react-toastify";

const AddDish = () => {
  const { user } = use(FoodCartContext);
  const handleAddDish = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const allData = Object.fromEntries(formData.entries());
    const dishInfo = {
      ...allData,
      uid: user?.uid,
    };
    axios
      .post("http://localhost:5000/addedDish", { ...dishInfo })
      .then((res) => {
        if (res.data?.insertedIdinsertedId) {
          toast.success("Dish Added!");
        }
      })
      .catch((err) => console.log(err));
    form.reset()
  };
  return (
    <div className="min-h-screen  flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 lg:p-12 w-full max-w-5xl border border-gray-200">
        <h2 className="text-4xl font-extrabold text-primary text-center mb-8 md:mb-10">
          Update Dish Details
        </h2>
        <form
          onSubmit={handleAddDish}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-base font-semibold text-gray-700  mb-2"
            >
              Dish Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base  transition duration-200 ease-in-out"
              required
            />
          </div>
          <div>
            <label
              htmlFor="image"
              className="block text-base font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base  transition duration-200 ease-in-out"
              required
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-base font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              step="0.01"
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base  transition duration-200 ease-in-out"
              required
            />
          </div>
          <div>
            <label
              htmlFor="display"
              className="block text-base font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Display Status
            </label>
            <select
              id="display"
              name="display"
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base  transition duration-200 ease-in-out"
            >
              <option value="">Select Display Status</option>
              <option value="populer">Popular</option>
              <option value="new">New Arrival</option>
              <option value="regular">Regular</option>
            </select>
          </div>
          <div>
            <label className="block text-base font-semibold text-gray-700  mb-2">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base  transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <label
              htmlFor="stock"
              className="block text-base font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              min="0"
              className="block w-full px-4 py-2.5 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-[#16A34A] text-base transition duration-200 ease-in-out"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="desc"
              className="block text-base font-semibold text-gray-700 dark:text-gray-300 mb-2"
            >
              Description
            </label>
            <textarea
              id="desc"
              name="desc"
              rows="4"
              className="block w-full px-4 py-2.5 border border-gray-300  rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:border-[#16A34A] text-bas transition duration-200 ease-in-out"
            ></textarea>
          </div>
          <div className="flex md:justify-end md:col-span-2 pt-4">
            <button
              type="submit"
              className="btn btn-primary font-bold text-white "
            >
              Added Dish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDish;
