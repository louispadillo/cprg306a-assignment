"use client";

import { useState } from "react";
import Link from "next/link";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleItemSelect(item) {
    // Item names look like "chicken breasts, 1 kg 🍗".
    // Drop the size (everything after the comma) and any emojis so the
    // MealDB API receives a clean ingredient name, e.g. "chicken breasts".
    const cleanedName = item.name
      .split(",")[0]
      .replace(/[\p{Extended_Pictographic}\uFE0F\u200D]/gu, "")
      .trim()
      .toLowerCase();

    setSelectedItemName(cleanedName);
  }

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm font-medium text-blue-700 underline hover:text-blue-500">
          ← Back to Home
        </Link>
        <h1 className="mb-8 mt-6 text-4xl font-bold text-slate-900">Shopping List</h1>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="flex-1">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>

          <div className="flex-1">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}
