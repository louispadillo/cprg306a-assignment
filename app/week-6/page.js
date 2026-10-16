"use client";
import { useState } from "react";
import Items from "./items.js";

export default function Page() {
    const[sortBy, setSortBy] = useState("name");


    return (
        <main className="">
            <h1>Shopping List</h1>
            <Items />
        </main>
    );
}