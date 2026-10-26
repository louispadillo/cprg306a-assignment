"use client";

export default function ItemsList({setSortBy}) {
    return(
        <div className="flex flex-col px-[64px]">
            <h3 className="text-[16px] font-semibold tracking-tighter text-dark-700 pb-2">Sort By:</h3>
            <div className="flex flex-row gap-2 justify-between">
                <button onClick={() => setSortBy("recent")} className="w-full px-[12px] py-[6px] text-[14px] rounded-xl font-medium tracking-tighter text-white bg-dark-900 justify-center items-center enabled:active:scale-95 transition-transform duration-100 hover:bg-blue-500">Recent</button>
                <button onClick={() => setSortBy("name")} className="w-full px-[12px] py-[6px] text-[14px] rounded-xl font-medium tracking-tighter text-white bg-dark-900 justify-center items-center enabled:active:scale-95 transition-transform duration-100 hover:bg-blue-500">Name</button>
                <button onClick={() => setSortBy("category")} className="w-full px-[12px] py-[6px] text-[14px] rounded-xl font-medium tracking-tighter text-white bg-dark-900 justify-center items-center enabled:active:scale-95 transition-transform duration-100 hover:bg-blue-500">Category</button>
                <button onClick={() => setSortBy("group")} className="w-full px-[12px] py-[6px] text-[14px] rounded-xl font-medium tracking-tighter text-white bg-dark-900 justify-center items-center enabled:active:scale-95 transition-transform duration-100 hover:bg-blue-500">Group Category</button>
            </div>
        </div>
    );
}