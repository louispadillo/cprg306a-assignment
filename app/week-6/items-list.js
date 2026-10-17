"use client";

export default function ItemsList({sortBy, setSortBy}) {
    const baseStyle =
    "p-4 flex flex-1 rounded-2xl text-white justify-center items-center enabled:active:scale-95 transition-all duration-100 hover:bg-blue-500";
    
    return (
    <div>
      <h3 className="text-[16px] font-semibold tracking-tighter text-dark-700 pb-2">Sort By:</h3>
      <div className="flex flex-row gap-2 justify-between w-[500px] mb-4">
        <button
          onClick={() => setSortBy("name")}
          className={`${baseStyle} ${sortBy === "name" ? "bg-purple-500" : "bg-dark-900"}`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`${baseStyle} ${sortBy === "category" ? "bg-purple-500" : "bg-dark-900"}`}
        >
          Category
        </button>
        <button
          onClick={() => setSortBy("group")}
          className={`${baseStyle} ${sortBy === "group" ? "bg-purple-500" : "bg-dark-900"}`}
        >
          Group Category
        </button>
      </div>
    </div>
  );
}