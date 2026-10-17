"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";


export default function ItemList() {

    const [sortBy, setSortBy] = useState("name");
    const [group, setGroup] = useState(false);


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


    const groupedItems = sortedItems.reduce((groups, item) => {

        if (!groups[item.category]) {
            groups[item.category] = [];
        }

        groups[item.category].push(item);

        return groups;

    }, {});


    return (
        <div>


            <div className="flex justify-center gap-3 mb-6">


                <button
                    onClick={() => {
                        setSortBy("name");
                        setGroup(false);
                    }}
                    className={`px-4 py-2 rounded-full shadow ${
                        sortBy === "name" && !group
                        ? "bg-blue-500 text-white"
                        : "bg-slate-200"
                    }`}
                >
                    Sort Name
                </button>


                <button
                    onClick={() => {
                        setSortBy("category");
                        setGroup(false);
                    }}
                    className={`px-4 py-2 rounded-full shadow ${
                        sortBy === "category" && !group
                        ? "bg-blue-500 text-white"
                        : "bg-slate-200"
                    }`}
                >
                    Sort Category
                </button>


                <button
                    onClick={() => setGroup(true)}
                    className={`px-4 py-2 rounded-full shadow ${
                        group
                        ? "bg-green-500 text-white"
                        : "bg-slate-200"
                    }`}
                >
                    Group Category
                </button>


            </div>



            {group ? (

                Object.keys(groupedItems)
                .sort()
                .map((category) => (

                    <div key={category} className="mb-6">

                        <h2 className="text-2xl font-bold capitalize mb-3">
                            {category}
                        </h2>


                        <ul>
                            {groupedItems[category]
                            .sort((a,b)=>a.name.localeCompare(b.name))
                            .map(item => (

                                <Item
                                    key={item.id}
                                    name={item.name}
                                    quantity={item.quantity}
                                    category={item.category}
                                />

                            ))}
                        </ul>

                    </div>

                ))

            ) : (

                <ul>
                    {sortedItems.map(item => (

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