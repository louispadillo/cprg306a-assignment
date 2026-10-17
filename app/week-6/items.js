"use client";
import items from "./items.json";

function ItemCard({ item }) {
  return (
    <li className="flex flex-col border border-dark-600 w-[500px] rounded-3xl p-4 text-dark-900 bg-white">
      <p className="bg-dark-600 flex flex-row rounded-full px-3 py-1 text-[12px] w-fit">{item.category}</p>
      <h3 className="text-2xl font-semibold tracking-tighter pb-4 pt-1">{item.name}</h3>
      <p className="tracking-tighter text-dark-700">Quantity: {item.quantity}</p>
    </li>
  );
}

export default function Items({sortBy}){
    
    //
    const sortedItems = [...items].sort((a,b) =>
        sortBy === "name" ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)
    );

    // return list if sortBy is group
    if (sortBy === "group") {
        // this returns the whole list container
        return (
            <ul className="gap-2 flex flex-col">
                {sortedItems.map((item, index) => {
                    const isNewCategory = index === 0 || item.category !== sortedItems[index - 1].category;

                    // this return each item inside the container
                    return (
                        <div key={item.id} className="flex flex-col gap-2">
                            {isNewCategory && (
                                <h2 className="text-xl font-bold tracking-tighter text-dark-900 capitalize pt-4">
                                    {item.category}
                                </h2>
                            )}
                            <ItemCard item={item} />
                        </div>
                    );
                })}
            </ul>
        );
    }

    // return list when sortBy is name or category
    return(
        <ul className="gap-2 flex flex-col">
            {sortedItems.map((item) =>
                <ItemCard key={item.id} item={item} />
            )}
        </ul>
    );
}