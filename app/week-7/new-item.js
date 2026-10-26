"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

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

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    console.log(item);

    alert(
      `Item added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`,
    );

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
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
                disabled={quantity === 1}
                className="px-4 py-2 bg-red-500 text-white rounded-md disabled:bg-gray-300"
              >
                -
              </button>

              <span className="text-2xl font-semibold">{quantity}</span>

              <button
                type="button"
                onClick={increment}
                disabled={quantity === 20}
                className="px-4 py-2 bg-green-500 text-white rounded-md disabled:bg-gray-300"
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
    </main>
  );
}
