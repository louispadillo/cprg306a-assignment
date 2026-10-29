"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = Array.isArray(items) ? [...items] : [];

  sortedItems.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div
      style={{
        marginTop: "25px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
          fontSize: "18px",
        }}
      >
        <label>
          Sort By:
        </label>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{
            padding: "8px 15px",
            borderRadius: "20px",
            border: "2px solid #ddd",
            fontSize: "16px",
          }}
        >
          <option value="name">Name</option>
          <option value="category">Category</option>
        </select>
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: "0",
          margin: "0",
        }}
      >
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}