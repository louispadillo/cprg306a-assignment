"use client";
import items from "./items.json";

export default function ItemList(){
    return(
        <ul className="gap-2 flex flex-col">
                {items.map((item) => (
                    <div key={item.id} className="flex flex-col border border-dark-600 w-[500px] rounded-3xl p-4 text-dark-900 bg-white">
                        <p className="bg-dark-600 flex flex-row rounded-full px-3 py-1 text-[12px] w-fit">{item.category}</p>
                        <h3 className="text-2xl font-semibold tracking-tighter pb-4 pt-1">{item.name}</h3>
                        <p className="tracking-tighter text-dark-700">Quantity: {item.quantity}</p>
                    </div>
                ))}
            </ul>
    );
}