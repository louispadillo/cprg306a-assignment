"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    } else {
      alert("You can't have more than 20!");
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      alert("You can't have less than 1!");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      id: Math.random().toString(36).substring(2, 11),
      name: name,
      quantity: quantity,
      category: category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <div className="w-[500px] bg-white p-8 rounded-3xl border border-dark-600">
      <h2 className="text-2xl font-bold mb-6 text-center tracking-tighter text-dark-900">New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-[16px] font-semibold tracking-tighter text-dark-700 mb-2">
            Item Name
          </label>

          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="w-full border border-dark-600 rounded-full px-4 py-2 tracking-tighter text-dark-900 bg-white focus:outline-hidden"
            placeholder="Enter item name"
          />
        </div>

        <div>
          <p className="block text-[16px] font-semibold tracking-tighter text-dark-700 mb-2">Quantity</p>

          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={decrement}
              className={`px-4 py-2 bg-dark-900 text-white rounded-xl 
                ${quantity === 1 ? "opacity-50" : "hover:bg-blue-500 enabled:active:scale-95 transition-transform duration-100"}`}  
            >
              -
            </button>

            <span className="text-2xl font-semibold tracking-tighter text-dark-900 w-8 text-center">{quantity}</span>

            <button
              type="button"
              onClick={increment}
              className={`px-4 py-2 bg-dark-900 text-white rounded-xl 
                ${quantity === 20 ? "opacity-50" : "hover:bg-blue-500 enabled:active:scale-95 transition-transform duration-100"}`}
            >
              +
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="category" className="block text-[16px] font-semibold tracking-tighter text-dark-700 mb-2">
            Category
          </label>

          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full border border-dark-600 rounded-full px-4 py-2 tracking-tighter text-dark-900 bg-white focus:outline-hidden"
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
          className="w-full p-4 rounded-2xl font-medium tracking-tighter text-white bg-dark-900 hover:bg-blue-500 enabled:active:scale-95 transition-transform duration-100"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
