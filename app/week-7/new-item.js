"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(e) {
    e.preventDefault();

    const item = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      quantity,
      category,
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <input
        type="text"
        placeholder="Enter item name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{
          padding: "15px 20px",
          fontSize: "18px",
          borderRadius: "25px",
          border: "2px solid #ddd",
          backgroundColor: "#fafafa",
        }}
      />

      <input
        type="number"
        min="1"
        max="20"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        style={{
          padding: "15px 20px",
          fontSize: "18px",
          borderRadius: "25px",
          border: "2px solid #ddd",
          backgroundColor: "#fafafa",
        }}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          padding: "15px 20px",
          fontSize: "18px",
          borderRadius: "25px",
          border: "2px solid #ddd",
          backgroundColor: "#fafafa",
        }}
      >
        <option value="produce">🥬 Produce</option>
        <option value="dairy">🥛 Dairy</option>
        <option value="bakery">🍞 Bakery</option>
        <option value="meat">🥩 Meat</option>
        <option value="frozen">❄️ Frozen Foods</option>
        <option value="canned goods">🥫 Canned Goods</option>
        <option value="dry goods">🍚 Dry Goods</option>
        <option value="beverages">🥤 Beverages</option>
        <option value="household">🏠 Household</option>
        <option value="other">📦 Other</option>
      </select>

      <button
        type="submit"
        style={{
          padding: "15px",
          fontSize: "20px",
          fontWeight: "bold",
          borderRadius: "25px",
          border: "none",
          backgroundColor: "#4CAF50",
          color: "white",
          cursor: "pointer",
        }}
      >
        Add Item
      </button>
    </form>
  );
}