"use client";
import { useState } from "react";
import QuantityCounter from "./quantity-counter";
import CategoryDropdown from "./category-dropdown";

export default function InputOrder() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (e) => {
        e.preventDefault();
        let newItem = {count, name, category};
        console.log(newItem);
    }

    const handleNameChange = (e) => {
        let inputName = e.target.value;
        setName(inputName);
    }

    const handleQuantityChange = (e) => {
        let inputQuantity = parseInt(e.target.value);
        if (inputQuantity >= 0) {
            setCount(inputQuantity);
        }
    } 

    return (
        <div className="w-full px-[64px] pt-[32px]">
            <form onSubmit={handleSubmit} className="flex flex-row items-start gap-16">

                {/* Groups the name and category fields in the left column*/}
                <div className="w-full flex flex-col gap-6">

                    {/* Item Name Field */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-[20px] text-dark-900 tracking-[-5%] font-semibold">Name of item</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter item name"
                            value={name}
                            onChange={(e) => handleNameChange(e)}
                            className="border border-dark-600 rounded-full p-[16px] text-[16px] text-dark-900 tracking-[-0.05em] h-[54px] bg-white"
                        />
                    </div>

                    {/* Item Category Field */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="category" className="text-[20px] text-dark-900 tracking-[-0.05em] font-semibold">Category</label>
                        <CategoryDropdown value={category} onChange={setCategory} />
                    </div>

                </div>

                {/* Quantity Counter + Order details /w submit in the right column */}
                <div className="w-full flex flex-col gap-6">

                    {/* Item Quantity Increase/Decrease Field */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="quantity" className="text-[20px] text-dark-900 tracking-tighter font-semibold">Quantity</label>
                        <QuantityCounter count={count} setCount={setCount} />
                    </div>

                    {/* Order Details + Submit button */}
                    <div className="flex flex-col rounded-xl border-dark-600 border bg-white p-4 gap-6">
                        <h2 className="text-[20px] text-dark-900 tracking-tighter font-semibold">Order Details</h2>

                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-3">
                                <p className="text-dark-700 text-[14px] tracking-tighter font-semibold">name</p>
                                {name === "" ? (
                                    <p className="text-dark-600 leading-0 tracking-tighter font-medium text-[16px]">No name entered</p>
                                ) : (
                                    <p className="text-dark-800 leading-0 tracking-tighter font-medium text-[16px]">{name}</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="text-dark-700 text-[14px] tracking-tighter font-semibold">category</p>
                                <p className="text-dark-800 leading-0 tracking-tighter font-medium text-[16px]">{category}</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="text-dark-700 text-[14px] tracking-tighter font-semibold">quantity</p>
                                <p className="text-dark-800 leading-0 tracking-tighter font-medium text-[16px]">{count}</p>
                            </div>
                        </div>

                        <button type="submit" className="bg-dark-900 text-white rounded-[10.8px] p-3 text-[20px] tracking-tighter font-medium">Submit</button>
                    </div>

                </div>
            </form>
        </div>
    );
}