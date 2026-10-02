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
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="rounded-lg bg-white p-8 text-center shadow-lg">
        <h1 className="mb-6 text-2xl font-bold">Quantity</h1>

        <p className="mb-6 text-4xl font-bold">{quantity}</p>

        <div className="flex gap-4">
          <button
            onClick={decrement}
            disabled={quantity === 1}
            className="rounded bg-red-500 px-6 py-2 font-bold text-white hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            -
          </button>

          <button
            onClick={increment}
            disabled={quantity === 20}
            className="rounded bg-green-500 px-6 py-2 font-bold text-white hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}