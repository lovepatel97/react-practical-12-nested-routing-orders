import React from "react";
import { Routes, Route, Link, NavLink, Outlet } from "react-router-dom";

function CurrentOrders() {
  const current = [
    { id: "ORD-1001", item: "Wireless Headphones", date: "Today", amount: "₹2,499", status: "In Transit" },
    { id: "ORD-1002", item: "Mechanical Keyboard", date: "Yesterday", amount: "₹4,199", status: "Processing" },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">Current Orders</h3>
      <div className="space-y-3">
        {current.map((order) => (
          <div key={order.id} className="border border-blue-200 bg-blue-50 p-4 rounded-lg flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">{order.item}</p>
              <p className="text-sm text-gray-500">Order ID: {order.id} • Placed: {order.date}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-blue-600">{order.amount}</p>
              <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full font-medium">
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OrderHistory() {
  const history = [
    { id: "ORD-0920", item: "Gaming Mouse", date: "12 Oct 2026", amount: "₹1,299", status: "Delivered" },
    { id: "ORD-0855", item: "USB-C Hub", date: "28 Sep 2026", amount: "₹899", status: "Delivered" },
    { id: "ORD-0714", item: "Laptop Stand", date: "15 Aug 2026", amount: "₹649", status: "Delivered" },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">Order History</h3>
      <div className="space-y-3">
        {history.map((order) => (
          <div key={order.id} className="border border-green-200 bg-green-50 p-4 rounded-lg flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">{order.item}</p>
              <p className="text-sm text-gray-500">Order ID: {order.id} • Date: {order.date}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-green-700">{order.amount}</p>
              <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full font-medium">
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CancelledOrders() {
  const cancelled = [
    { id: "ORD-0901", item: "Bluetooth Speaker", date: "05 Oct 2026", amount: "₹1,999", reason: "Customer requested cancellation" },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">Cancelled Orders</h3>
      <div className="space-y-3">
        {cancelled.map((order) => (
          <div key={order.id} className="border border-red-200 bg-red-50 p-4 rounded-lg flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">{order.item}</p>
              <p className="text-sm text-gray-500">Order ID: {order.id} • Cancelled on: {order.date}</p>
              <p className="text-xs text-red-600 mt-1">Reason: {order.reason}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-500 line-through">{order.amount}</p>
              <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded-full font-medium">
                Cancelled
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function OrdersLayout() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="border-b pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Order Management</h2>
        <p className="text-gray-500 text-sm mt-1">Select an order category below using nested routes.</p>

        {/* Nested Navigation */}
        <div className="flex gap-4 mt-4">
          <NavLink
            to="/orders/current"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-medium text-sm transition ${
                isActive ? "bg-blue-600 text-white shadow" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Current Orders
          </NavLink>
          <NavLink
            to="/orders/history"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-medium text-sm transition ${
                isActive ? "bg-blue-600 text-white shadow" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Order History
          </NavLink>
          <NavLink
            to="/orders/cancelled"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-medium text-sm transition ${
                isActive ? "bg-blue-600 text-white shadow" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            Cancelled Orders
          </NavLink>
        </div>
      </div>

      {/* Outlet renders the nested child route */}
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <nav className="bg-gray-900 text-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-bold">🛒 E-Commerce Hub</h1>
          <div className="flex gap-6 text-sm">
            <Link to="/" className="hover:text-blue-400 transition font-medium">
              Home
            </Link>
            <Link to="/orders/current" className="hover:text-blue-400 transition font-medium">
              Orders (Nested Routes)
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-6 mt-6">
        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-white p-8 rounded-xl shadow-md text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to E-Commerce Store</h2>
                <p className="text-gray-600 mb-6">Manage all your purchases with nested routing.</p>
                <Link
                  to="/orders/current"
                  className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Go to Orders Page →
                </Link>
              </div>
            }
          />

          {/* Nested Routing Configuration */}
          <Route path="/orders" element={<OrdersLayout />}>
            <Route index element={<CurrentOrders />} />
            <Route path="current" element={<CurrentOrders />} />
            <Route path="history" element={<OrderHistory />} />
            <Route path="cancelled" element={<CancelledOrders />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
