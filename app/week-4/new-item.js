"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-6">New Item</h1>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={decrement}
            disabled={quantity === 1}
            className="px-4 py-2 bg-red-500 text-white rounded-md disabled:bg-gray-300"
          >
            -
          </button>

          <span className="text-2xl font-semibold">{quantity}</span>

          <button
            onClick={increment}
            disabled={quantity === 20}
            className="px-4 py-2 bg-green-500 text-white rounded-md disabled:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>
    </main>
  );
}