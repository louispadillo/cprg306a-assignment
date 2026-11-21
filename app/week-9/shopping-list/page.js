"use client";

import { useState } from "react";
import Link from "next/link";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user } = useUserAuth();
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

  // Part 6: protect the page. If the user is not signed in, do not render
  // the shopping list, even when the URL is accessed directly.
  if (!user) {
    return (
      <main className="min-h-screen bg-gray-100 px-6 py-12">
        <div className="mx-auto max-w-md rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-slate-900">
            You must be signed in
          </h1>
          <p className="mt-3 text-slate-600">
            The shopping list is only available to signed-in users.
          </p>
          <Link
            href="/week-9"
            className="mt-6 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-500"
          >
            Go to sign in
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/week-9"
          className="text-sm font-medium text-blue-700 underline hover:text-blue-500"
        >
          ← Back
        </Link>
        <h1 className="mb-8 mt-6 text-4xl font-bold text-slate-900">
          Shopping List
        </h1>

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
