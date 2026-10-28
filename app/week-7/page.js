"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemsList from "./items-list";
import Items from "./items";
import itemsData from "./items.json";
import GoBack from "../go-back";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [sortBy, setSortBy] = useState("name");

    // add the new item to a copy of the list
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <main className="pb-6">
            <h1 className="text-center text-[40px] tracking-tighter font-bold p-10 text-dark-900">Shopping List</h1>
            <div className="flex flex-col justify-center items-center gap-6">
                <NewItem onAddItem={handleAddItem} />
                <div>
                    <ItemsList setSortBy={setSortBy} />
                    <Items items={items} sortBy={sortBy} />
                </div>
                <GoBack />
            </div>
        </main>
    );
}
