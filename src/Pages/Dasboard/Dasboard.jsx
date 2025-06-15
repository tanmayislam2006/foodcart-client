import React, { useEffect, useState, useContext } from "react";
import { FaPen, FaPlus, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
import FoodCartContext from "./../../Context/FoodCartContext"; // Ensure this path is correct
import BouncingLoader from "../../Components/Loader/BouncingLoader"; // Adjust path as needed

const Dashboard = () => {
  const { user } = useContext(FoodCartContext);
  const [refresh, setRefresh] = useState(false);
  const [myDishes, setMyDishes] = useState([]); // Changed from myTips to myDishes
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [orderedUsers, setOrderedUser] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`http://localhost:5000/allMenu?uid=${user?.uid}`) // Updated API endpoint
      .then((res) => res.json())
      .then((data) => {
        setMyDishes(data); // Set myDishes
        setLoading(false);
      });
  }, [user?.uid, refresh]);
  const handleOrdedDisDetails = (dishID) => {
    fetch(`http://localhost:5000/dishOrders/${dishID}`)
      .then((res) => res.json())
      .then((data) => setOrderedUser(data))
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16A34A",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteDish/${id}`, {
          // Updated API endpoint
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setRefresh(!refresh); // Trigger re-fetch
              Swal.fire({
                title: "Deleted!",
                text: "Your dish has been deleted.",
                icon: "success",
                confirmButtonColor: "#16A34A",
              });
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete dish. Please try again.",
                icon: "error",
                confirmButtonColor: "#16A34A",
              });
            }
          })
          .catch((err) => {
            console.error("Error deleting dish:", err);
            Swal.fire({
              title: "Error!",
              text: "An error occurred during deletion.",
              icon: "error",
              confirmButtonColor: "#16A34A",
            });
          });
      }
    });
  };

  return (
    <div className="min-h-screen py-10 px-2 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-[#16A34A] mb-8 text-center">
        My Dishes
      </h1>
      {loading && (
        <div className="flex justify-center items-center h-48">
          <BouncingLoader />
        </div>
      )}

      {error && (
        <div className="text-center text-red-500 py-8">
          <p>{error}</p>
        </div>
      )}

      {/* Big device table */}
      {!loading && myDishes.length > 0 && (
        <div className="w-full max-w-4xl rounded-lg shadow-lg overflow-x-auto border border-gray-200 hidden md:block">
          {/* Style */}
          <div className="flex items-center shadow gap-2 px-4 py-2 bg-gray-100 border-b border-gray-200">
            <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
          </div>
          <table className="min-w-full bg-transparent">
            <thead>
              <tr className="border-b border-gray-100 text-center">
                <th className="py-3 px-4">Image</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Order Count</th>
                <th className="py-3 px-4">Price</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myDishes.map((dish) => (
                <tr
                  key={dish._id}
                  className="border-b border-gray-100 dark:text-white text-center"
                >
                  <td className="py-3 px-4 align-middle">
                    {dish?.image ? ( // Changed from imageUrl to image
                      <img
                        src={dish.image}
                        alt={dish.name} // Changed from title to name
                        className="w-14 h-14 object-cover rounded-md shadow mx-auto"
                      />
                    ) : (
                      <div className="w-14 h-14 flex items-center justify-center bg-gray-200 rounded-md shadow text-gray-400 text-xs mx-auto">
                        No Image
                      </div>
                    )}
                  </td>
                  <td className="py-3 px-4 font-semibold align-middle">
                    {dish.name} {/* Changed from title to name */}
                  </td>
                  <td className="py-3 px-4 align-middle">{dish.category}</td>
                  <td className="py-3 px-4 align-middle">
                    <button
                      onClick={() => {
                        handleOrdedDisDetails(`${dish._id}`);
                        document.getElementById("my_modal_1").showModal();
                      }}
                      className="btn"
                    >
                      {" "}
                      {dish.orderCount || 0}
                    </button>
                  </td>
                  <td className="py-3 px-4 align-middle">
                    ${parseFloat(dish.price).toFixed(2)}
                  </td>
                  <td className="px-4 py-2 align-middle">
                    <button
                      onClick={() => navigate(`/updateDish/${dish._id}`)}
                      className="text-yellow-500 cursor-pointer mx-3 my-2"
                    >
                      <FaPen size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(dish._id)}
                      className="text-red-500 cursor-pointer"
                    >
                      <FaTrash size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box max-w-2xl">
          <h3 className="font-bold text-2xl text-center text-primary mb-4">
            Dish Order Details
          </h3>

          <div className="text-center text-lg mb-2">
            <span className="font-semibold">Dish:</span> Dish
          </div>

          {/* User List */}
          <div className="max-h-64 overflow-y-auto rounded-md border p-4 bg-base-100 shadow-inner">
            {orderedUsers?.length > 0 ? (
              <ul className="space-y-3">
                {orderedUsers.map((user, idx) => (
                  <li key={user._id} className="border-b pb-2">
                    <p className="font-semibold text-accent">
                      {idx + 1}. {user.name}
                    </p>
                    <p className="text-sm text-gray-500">Email: {user.email}</p>
                    {/* Optional: <p>Order count: {user.orderCount}</p> */}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-sm text-gray-400">
                No users have ordered this dish yet.
              </p>
            )}
          </div>

          {/* Action Button */}
          <div className="modal-action mt-6">
            <form method="dialog">
              <button className="btn btn-primary">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Mobile card view */}
      {!loading && !error && myDishes.length > 0 && (
        <div className="w-full max-w-4xl flex flex-col gap-4 md:hidden mt-6">
          {myDishes.map((dish) => (
            <div
              key={dish._id}
              className="rounded-lg shadow p-4 flex flex-col gap-2 border border-gray-300"
            >
              <div className="flex items-center gap-4">
                {dish?.image ? ( // Changed from imageUrl to image
                  <img
                    src={dish.image}
                    alt={dish.name} // Changed from title to name
                    className="w-16 h-16 object-cover rounded-md shadow"
                  />
                ) : (
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-md shadow text-xs text-gray-400">
                    No Image
                  </div>
                )}
                <div>
                  <div className="font-bold text-lg">{dish.name}</div>{" "}
                  {/* Changed from title to name */}
                  <div className="text-sm">{dish.category}</div>
                  <div className="text-sm">
                    order Count{" "}
                    <button
                      onClick={() => {
                        handleOrdedDisDetails(`${dish._id}`);
                        document.getElementById("my_modal_1").showModal();
                      }}
                      className="btn"
                    >
                      {" "}
                      {dish.orderCount || 0}
                    </button>
                  </div>
                  <div className="text-sm">
                    Price: ${parseFloat(dish.price).toFixed(2)}{" "}
                    {/* Displaying Price */}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => navigate(`/updateDish/${dish._id}`)}
                  className="flex-1 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-md font-semibold shadow"
                >
                  <FaPen className="inline mr-2" /> Edit
                </button>
                <button
                  onClick={() => handleDelete(dish._id)}
                  className="flex-1 bg-red-100 text-red-700 px-4 py-2 rounded-md font-semibold shadow"
                >
                  <FaTrash className="inline mr-2" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="md:min-w-3xl lg:min-w-4xl flex justify-end mt-10">
        <Link to="/addDish" className="btn btn-primary font-bold text-white ">
          <FaPlus />
          Add Dish
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
