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

    const dataWithIndex = items.map((item, index) => ({
        ...item,
        originalIndex: index
    }));
    
    // return a sorted list
    const sortedItems = [...dataWithIndex].sort((a,b) => {
        sortBy === "name" ? a.name.localeCompare(b.name) : a.category.localeCompare(b.category)
        if (sortBy === "name") {
            return a.name.localeCompare(b.name)
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category)
        } else if (sortBy === "recent") {
            return a.originalIndex - b.originalIndex
        }
    });

    // return list if sortBy is group
    if (sortBy === "group") {
        const categories = [...new Set(sortedItems.map((item) => item.category))];

        return (    
            <div className="flex flex-col gap-4">
                {categories.map((category) =>  (
                    <div key={category} className="flex flex-col gap-2 p-2 bg-dark-600 rounded-4xl">
                        <h2 className="text-xl font-bold tracking-tighter text-dark-900 capitalize py-2 pl-3">
                            {category}
                        </h2>
                        <ul className="gap-1 flex flex-col">
                            {sortedItems
                                .filter((item) => item.category === category)
                                .map((item) => (
                                    <ItemCard key={item.id} item={item} />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
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