"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // Sort a copy so we never mutate the imported JSON array
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // Optional Extra Challenge: group by category (categories + items sorted A-Z)
  const groupedItems = [...items]
    .sort((a, b) => a.name.localeCompare(b.name))
    .reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});
  const sortedCategories = Object.keys(groupedItems).sort((a, b) =>
    a.localeCompare(b)
  );

  const activeClass = "bg-blue-500 text-white";
  const inactiveClass = "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <div>
      <div className="mb-6 flex items-center gap-2">
        <span className="text-sm text-slate-600 dark:text-slate-300">Sort by:</span>
        <button
          onClick={() => setSortBy("name")}
          className={`rounded px-4 py-2 text-sm font-medium ${
            sortBy === "name" ? activeClass : inactiveClass
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`rounded px-4 py-2 text-sm font-medium ${
            sortBy === "category" ? activeClass : inactiveClass
          }`}
        >
          Category
        </button>
        <button
          onClick={() => setSortBy("grouped")}
          className={`rounded px-4 py-2 text-sm font-medium ${
            sortBy === "grouped" ? activeClass : inactiveClass
          }`}
        >
          Grouped Category
        </button>
      </div>

      {sortBy === "grouped" ? (
        <div className="grid gap-6">
          {sortedCategories.map((category) => (
            <div key={category}>
              <h2 className="mb-3 text-xl font-bold capitalize text-slate-900 dark:text-slate-100">
                {category}
              </h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {groupedItems[category].map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
