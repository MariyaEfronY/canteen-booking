"use client";
import { useEffect, useState } from "react";

export default function MenuPage() {
  const [menu, setMenu] = useState<any[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/menu").then(res => res.json()).then(setMenu);
  }, []);

  const orderItem = async (item: string) => {
    const res = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item }),
    });
    const data = await res.json();
    setMessage(`✅ Order placed! Your Token: ${data.token}`);
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {menu.map((m) => (
        <div key={m._id} className="border rounded shadow p-4 flex flex-col items-center">
          <img src={m.image} alt={m.name} className="w-32 h-32 object-cover rounded mb-2" />
          <h3 className="text-lg font-semibold">{m.name}</h3>
          <p className="text-gray-600">{m.description}</p>
          <p className="font-bold">₹{m.price}</p>
          <button
            onClick={() => orderItem(m.name)}
            className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
          >
            Order
          </button>
        </div>
      ))}
      {message && <p className="col-span-full text-green-600 mt-4">{message}</p>}
    </div>
  );
}
