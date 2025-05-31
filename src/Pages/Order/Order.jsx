import React, { use, useEffect, useState } from "react";
import FoodCartContext from "../../Context/FoodCartContext";
import { FaBoxOpen, FaCheckCircle, FaTimesCircle, FaClock, FaInfoCircle } from "react-icons/fa";

const Order = () => {
  const { user } = use(FoodCartContext);
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (user?.uid) {
      fetch(`https://food-cart-server.onrender.com/order/${user.uid}`)
        .then((res) => res.json())
        .then((data) => setOrders(data || []));
    }
  }, [user]);

  const handleDetails = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center bg-primary/5 py-10 px-2">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-4 sm:p-8">
        <h2 className="text-3xl font-extrabold text-primary mb-6 text-center flex items-center gap-2 justify-center">
          <FaBoxOpen className="text-primary" /> My Orders
        </h2>
        {!user ? (
          <div className="text-center text-gray-400 py-16">
            <FaBoxOpen className="mx-auto text-6xl mb-4" />
            <p className="text-lg">Please login to view your orders.</p>
            <a
              href="/login"
              className="inline-block mt-6 bg-primary text-white px-6 py-2 rounded-full font-bold shadow hover:bg-primary/90 transition"
            >
              Login
            </a>
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center text-gray-400 py-16">
            <FaBoxOpen className="mx-auto text-6xl mb-4" />
            <p className="text-lg">You have no orders yet.</p>
            <a
              href="/menu"
              className="inline-block mt-6 bg-primary text-white px-6 py-2 rounded-full font-bold shadow hover:bg-primary/90 transition"
            >
              Browse Menu
            </a>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {orders.map((order, idx) => (
              <div
                key={order._id || idx}
                className="border border-primary/10 rounded-xl p-4 sm:p-6 shadow-sm bg-primary/5"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <div className="font-bold text-primary text-lg">
                    Order #{order._id?.slice(-6) || idx + 1}
                  </div>
                  <div className="text-sm text-gray-500">
                    {order.date
                      ? new Date(order.date).toLocaleString()
                      : ""}
                  </div>
                  <div className="flex items-center gap-2">
                    {order.status === "delivered" ? (
                      <span className="flex items-center gap-1 text-green-600 font-semibold">
                        <FaCheckCircle /> Delivered
                      </span>
                    ) : order.status === "cancelled" ? (
                      <span className="flex items-center gap-1 text-red-600 font-semibold">
                        <FaTimesCircle /> Cancelled
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-yellow-600 font-semibold">
                        <FaClock /> {order.status || "Processing"}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mb-3 flex flex-wrap gap-4 text-xs text-gray-500">
                  <span>
                    <span className="font-semibold text-primary">Name:</span> {order.name}
                  </span>
                  <span>
                    <span className="font-semibold text-primary">Address:</span> {order.address}
                  </span>
                  <span>
                    <span className="font-semibold text-primary">Phone:</span> {order.phone}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-lg text-primary">
                    Total: $
                    {order.cartItems
                      ? order.cartItems
                          .reduce(
                            (sum, item) =>
                              sum + parseFloat(item.price) * (item.quantity || 1),
                            0
                          )
                          .toFixed(2)
                      : "0.00"}
                  </span>
                  <button
                    onClick={() => handleDetails(order)}
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-semibold shadow hover:bg-primary/90 transition"
                  >
                    <FaInfoCircle /> Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        {showModal && selectedOrder && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative">
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-primary text-2xl"
                onClick={closeModal}
                aria-label="Close"
              >
                &times;
              </button>
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <FaInfoCircle /> Order Details
              </h3>
              <div className="mb-2 text-sm text-gray-700">
                <span className="font-semibold">Order ID:</span> {selectedOrder._id}
              </div>
              <div className="mb-2 text-sm text-gray-700">
                <span className="font-semibold">Placed:</span>{" "}
                {selectedOrder.date
                  ? new Date(selectedOrder.date).toLocaleString()
                  : ""}
              </div>
              <div className="mb-2 text-sm text-gray-700">
                <span className="font-semibold">Status:</span>{" "}
                <span className={
                  selectedOrder.status === "delivered"
                    ? "text-green-600"
                    : selectedOrder.status === "cancelled"
                    ? "text-red-600"
                    : "text-yellow-600"
                }>
                  {selectedOrder.status || "Processing"}
                </span>
              </div>
              <div className="mb-2 text-sm text-gray-700">
                <span className="font-semibold">Name:</span> {selectedOrder.name}
              </div>
              <div className="mb-2 text-sm text-gray-700">
                <span className="font-semibold">Address:</span> {selectedOrder.address}
              </div>
              <div className="mb-2 text-sm text-gray-700">
                <span className="font-semibold">Phone:</span> {selectedOrder.phone}
              </div>
              <div className="overflow-x-auto mt-4">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="py-2 px-3 text-left">Item</th>
                      <th className="py-2 px-3 text-center">Qty</th>
                      <th className="py-2 px-3 text-right">Price</th>
                      <th className="py-2 px-3 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(selectedOrder.cartItems || []).map((item, i) => (
                      <tr key={item._id || i} className="border-b last:border-b-0">
                        <td className="py-2 px-3 flex items-center gap-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 object-cover rounded"
                          />
                          <span>{item.name}</span>
                        </td>
                        <td className="py-2 px-3 text-center">{item.quantity}</td>
                        <td className="py-2 px-3 text-right">
                          ${parseFloat(item.price).toFixed(2)}
                        </td>
                        <td className="py-2 px-3 text-right">
                          ${(parseFloat(item.price) * (item.quantity || 1)).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end mt-4">
                <span className="font-bold text-lg text-primary">
                  Total: $
                  {selectedOrder.cartItems
                    ? selectedOrder.cartItems
                        .reduce(
                          (sum, item) =>
                            sum + parseFloat(item.price) * (item.quantity || 1),
                          0
                        )
                        .toFixed(2)
                    : "0.00"}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Order;