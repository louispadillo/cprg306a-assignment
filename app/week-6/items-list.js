"use client";
import Items from "./items.js";

export default function ItemsList(sortBy) {
    return(
        <div>
            <button onClick={() => sortBy="name"}>Name</button>
            <button onClick={() => sortBy="name"}>Category</button>
            <button onClick={() => sortBy="name"}>Group Category</button>
        </div>
    );
}