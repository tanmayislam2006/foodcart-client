import React, { use } from "react";
import FoodCartContext from "../../Context/FoodCartContext";
import { FaBoxOpen, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Order = () => {
  const {  orders = [] } = use(FoodCartContext);

  // Example: orders = [{ id, items: [{name, quantity, price}], total, status, date }]
  // You should fetch user orders from your backend in a real app


  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center bg-primary/5 py-10 px-2">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-extrabold text-primary mb-6 text-center flex items-center gap-2 justify-center">
          <FaBoxOpen className="text-primary" /> My Orders
        </h2>
        {orders.length === 0 ? (
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
            {orders.map((order) => (
              <div
                key={order.id}
                className="border border-primary/10 rounded-xl p-6 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <div className="font-bold text-primary text-lg">
                    Order #{order.id}
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(order.date).toLocaleString()}
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
                        <FaBoxOpen /> {order.status || "Processing"}
                      </span>
                    )}
                  </div>
                </div>
                <div className="overflow-x-auto">
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
                      {order.items.map((item, idx) => (
                        <tr key={idx} className="border-b last:border-b-0">
                          <td className="py-2 px-3">{item.name}</td>
                          <td className="py-2 px-3 text-center">{item.quantity}</td>
                          <td className="py-2 px-3 text-right">${parseFloat(item.price).toFixed(2)}</td>
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
                    Total: ${parseFloat(order.total).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Order;