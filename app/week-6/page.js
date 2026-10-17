"use client";
import { useState } from "react";
import Items from "./items.js";
import ItemsList from "./items-list.js";

export default function Page() {
    const[sortBy, setSortBy] = useState("name");


    return (
        <main className="">
            <h1 className="text-center text-[40px] tracking-tighter font-bold p-10 text-dark-900">Shopping List</h1>
            <div className="flex flex-col justify-center">
                <ItemsList />
                <Items />
            </div>
        </main>
    );
}