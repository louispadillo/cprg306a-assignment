"use client";
import { useState } from "react";
import Link from "next/link";
import NewItem from "./new-item";
import ItemsList from "./items-list";
import Items from "./items";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import GoBack from "../../go-back";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    const { user, firebaseSignOut } = useUserAuth();
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

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Error signing out:", error);
        }
    }

    // protect the page: don't render the shopping list unless someone is signed in
    if (!user) {
        return (
            <main className="pb-6">
                <h1 className="text-center text-[40px] tracking-tighter font-bold p-10 text-dark-900">Shopping List</h1>
                <div className="flex justify-center">
                    <div className="w-[500px] bg-white p-8 rounded-3xl border border-dark-600 flex flex-col gap-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-2 text-center tracking-tighter text-dark-900">Access Denied</h2>
                            <p className="text-center tracking-tighter text-dark-700">You need to be signed in to view this page.</p>
                        </div>
                        <Link
                            href="/week-9"
                            className="w-full p-4 rounded-2xl font-medium text-center tracking-tighter text-white bg-dark-900 hover:bg-blue-500 active:scale-95 transition-transform duration-100"
                        >
                            Go to Sign In
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="pb-6">
            <h1 className="text-center text-[40px] tracking-tighter font-bold p-10 text-dark-900">Shopping List</h1>
            <div className="flex flex-row justify-center items-center gap-4 pb-6">
                <p className="tracking-tighter text-dark-700">Signed in as {user.displayName || user.email}</p>
                <button
                    onClick={handleSignOut}
                    className="px-4 py-2 text-[14px] rounded-xl font-medium tracking-tighter text-white bg-dark-900 hover:bg-blue-500 enabled:active:scale-95 transition-transform duration-100"
                >
                    Sign Out
                </button>
            </div>
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
                <Link href="/week-9" className="hover:bg-gray-700 inline-block bg-black font-bold text-[20px] text-white tracking-[-0.64px] mt-6 py-2 px-4 rounded-xl">Back to Week 9</Link>
                <GoBack />
            </div>
        </main>
    );
}
