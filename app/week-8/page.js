"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemsList from "./items-list";
import Items from "./items";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import GoBack from "../go-back";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [sortBy, setSortBy] = useState("name");
    const [selectedItemName, setSelectedItemName] = useState("");

    // add the new item to a copy of the list
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    // clean up the item name (drop the size and any emoji) so the API can use it
    const handleItemSelect = (item) => {
        const cleanName = item.name
            .split(",")[0]
            .replace(/[\p{Extended_Pictographic}\u{FE0F}\u{200D}]/gu, "")
            .trim();
        setSelectedItemName(cleanName);
    };

    return (
        <main className="pb-6">
            <h1 className="text-center text-[40px] tracking-tighter font-bold p-10 text-dark-900">Shopping List</h1>
            <div className="flex flex-row justify-center items-start gap-6">
                <div className="flex flex-col gap-6">
                    <NewItem onAddItem={handleAddItem} />
                    <div>
                        <ItemsList setSortBy={setSortBy} />
                        <Items items={items} sortBy={sortBy} onItemSelect={handleItemSelect} />
                    </div>
                </div>
                <div className="sticky top-6">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
            <div className="flex justify-center pt-6">
                <GoBack />
            </div>
        </main>
    );
}
