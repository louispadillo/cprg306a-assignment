"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {

  const [sortBy, setSortBy] = useState("name");


  const sortedItems = [...items].sort((a, b) => {

    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }

  });


  return (
    <div>

      <button
        onClick={() => setSortBy("name")}
        className={
          sortBy === "name"
          ? "bg-blue-500 text-white p-2"
          : "bg-gray-200 p-2"
        }
      >
        Sort by Name
      </button>


      <button
        onClick={() => setSortBy("category")}
        className={
          sortBy === "category"
          ? "bg-blue-500 text-white p-2 ml-2"
          : "bg-gray-200 p-2 ml-2"
        }
      >
        Sort by Category
      </button>


      <ul>
        {
          sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))
        }
      </ul>

    </div>
  );
}