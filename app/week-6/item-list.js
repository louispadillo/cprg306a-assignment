"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {

    const [sortBy, setSortBy] = useState("name");

    let sortedItems = [...items];

    if (sortBy === "name") {
        sortedItems.sort((a, b) => 
            a.name.localeCompare(b.name)
        );
    }

    if (sortBy === "category") {
        sortedItems.sort((a, b) => 
            a.category.localeCompare(b.category)
        );
    }


    return (
        <div>

            <button
                onClick={() => setSortBy("name")}
                style={{
                    marginRight: "10px",
                    padding: "8px",
                    backgroundColor: sortBy === "name" ? "lightblue" : "lightgray"
                }}
            >
                Sort by Name
            </button>


            <button
                onClick={() => setSortBy("category")}
                style={{
                    padding: "8px",
                    backgroundColor: sortBy === "category" ? "lightblue" : "lightgray"
                }}
            >
                Sort by Category
            </button>


            <ul>
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
