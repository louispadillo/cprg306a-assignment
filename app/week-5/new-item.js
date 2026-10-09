"use client";

import { useState } from "react";

export default function NewItem() {
    // Week 5
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    function increment() {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

    function decrement() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        const item = {
            name,
            quantity,
            category,
        };

        console.log(item);

        alert(
            `Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
        );

        // Reset form
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-6 max-w-md space-y-4"
        >
            {/* Name */}
            <div>
                <label className="block font-semibold mb-1">
                    Item Name
                </label>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border rounded w-full p-2"
                />
            </div>

            {/* Quantity */}
            <div>
                <label className="block font-semibold mb-1">
                    Quantity
                </label>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={decrement}
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                        -
                    </button>

                    <span className="font-bold text-lg">
                        {quantity}
                    </span>

                    <button
                        type="button"
                        onClick={increment}
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Category */}
            <div>
                <label className="block font-semibold mb-1">
                    Category
                </label>

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border rounded w-full p-2"
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {/* Submit */}
            <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
            >
                Add Item
            </button>
        </form>
    );
}