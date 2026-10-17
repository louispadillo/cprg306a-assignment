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

        return 0;
    });


    return (
        <div>

            <button
                onClick={() => setSortBy("name")}
                className={`p-2 rounded mr-2 ${
                    sortBy === "name"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-300"
                }`}
            >
                Sort by Name
            </button>


            <button
                onClick={() => setSortBy("category")}
                className={`p-2 rounded ${
                    sortBy === "category"
                    ? "bg-blue-600 text-white"
                    : "bg-slate-300"
                }`}
            >
                Sort by Category
            </button>


            <ul className="mt-6">

                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}

            </ul>

        </div>
    );
}