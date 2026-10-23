"use client";

import { useEffect, useRef, useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [message, setMessage] = useState("");
  const messageTimer = useRef(null);

  useEffect(() => {
    return () => clearTimeout(messageTimer.current);
  }, []);

  function showMessage(text) {
    setMessage(text);
    clearTimeout(messageTimer.current);
    messageTimer.current = setTimeout(() => setMessage(""), 3000);
  }

  function hideMessage() {
    clearTimeout(messageTimer.current);
    setMessage("");
  }

  function increment() {
    if (quantity === 20) {
      showMessage("the max capacity is 20");
      return;
    }

    setQuantity(quantity + 1);
    hideMessage();
  }

  function decrement() {
    if (quantity === 1) {
      showMessage("you need to have at least one item");
      return;
    }

    setQuantity(quantity - 1);
    hideMessage();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      id: Math.random().toString(36).substring(2, 9),
      name: name,
      quantity: quantity,
      category: category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
    hideMessage();
  }

  return (
    <div className="mb-10 flex justify-center">
      {" "}
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {" "}
        <h1 className="text-2xl font-bold mb-6 text-center">New Item </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Item Name
            </label>

            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter item name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Quantity</label>

            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={decrement}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                -
              </button>

              <span className="text-2xl font-semibold">{quantity}</span>

              <button
                type="button"
                onClick={increment}
                className="px-4 py-2 bg-green-500 text-white rounded-md"
              >
                +
              </button>
            </div>

          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium mb-2"
            >
              Category
            </label>

            <select
              id="category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 bg-white"
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Add Item
          </button>
        </form>
      </div>

      {message && (
        <div
          role="alert"
          className="fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg"
        >
          {message}
        </div>
      )}
    </div>
  );
}
