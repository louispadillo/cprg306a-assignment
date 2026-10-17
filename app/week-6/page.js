"use client";
import { useState } from "react";
import ItemsList from "./items-list.js";
import Items from "./items.js";
import GoBackFilled from "../go-back-filled.js";

export default function Page() {
    const[sortBy, setSortBy] = useState("name");

    return (
        <main className="pb-6">
            <h1 className="text-center text-[40px] tracking-tighter font-bold p-10 text-dark-900">Shopping List</h1>
            <div className="flex flex-col justify-center items-center">
                <ItemsList setSortBy={setSortBy}/>
                <Items sortBy={sortBy}/>
                <GoBackFilled />
            </div>
        </main>
    );
}