"use client";
import { useEffect, useState } from "react";

export default function AdminPage() {
  const [orders, setOrders] = useState<any[]>([]);

  const fetchOrders = () => {
    fetch("/api/order").then(res => res.json()).then(setOrders);
  };

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 5000);
    return () => clearInterval(interval);
  }, []);

  const updateStatus = async (id: string, status: string) => {
    await fetch("/api/order", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    fetchOrders();
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
      <ul className="space-y-2">
        {orders.map((o) => (
          <li key={o._id} className="border p-2 flex justify-between items-center">
            <span>🎟 Token {o.token}: {o.item} ({o.status})</span>
            <div className="space-x-2">
              <button onClick={() => updateStatus(o._id, "Ready")} className="bg-yellow-500 text-white px-2 py-1 rounded">Ready</button>
              <button onClick={() => updateStatus(o._id, "Completed")} className="bg-green-500 text-white px-2 py-1 rounded">Done</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
