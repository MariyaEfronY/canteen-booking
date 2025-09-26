"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <h1 className="text-3xl font-bold">🍴 College Canteen</h1>
      <Link href="/menu" className="px-4 py-2 bg-blue-500 text-white rounded">View Menu</Link>
      <Link href="/admin" className="px-4 py-2 bg-green-500 text-white rounded">Admin Panel</Link>
    </div>
  );
}
