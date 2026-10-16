"use client";
import items from "./items.json";

export default function ItemList(){
    return(
        <ul className="grid gap-4 sm:grid-cols-2">
                {items.map((item) => (
                    <div key={item.id} className="flex flex-col border border-dark-600 rounded-xl p-4 text-dark-900 bg-white">
                        <h3>{item.name}</h3>
                        <h3>{item.quantity}</h3>
                        <h3>{item.category}</h3>
                    </div>
                ))}
            </ul>
    );
}