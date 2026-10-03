"use client";
import { useState } from "react";
import QuantityCounter from "./quantity-counter";
import { CaretDownIcon } from "@phosphor-icons/react";
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
        <div className="pl-[64px] pt-[32px]">
            <form onSubmit={handleSubmit} className="flex flex-row gap-6">

                {/* Groups the name and category fields in the left column*/}
                <div className="flex flex-col gap-6">

                    {/* Item Name Field */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-[20px] text-dark-900 tracking-[-5%] font-semibold">Name of item</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter item name"
                            value={name}
                            onChange={(e) => handleNameChange(e)}
                            className="border border-dark-600 rounded-full p-[16px] text-[16px] text-dark-900 tracking-[-0.05em] w-[400px] h-[54px] bg-white"
                        />
                    </div>

                    {/* Item Category Field */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="category" className="text-[20px] text-dark-900 tracking-[-0.05em] font-semibold">Category</label>
                        <CategoryDropdown value={category} onChange={setCategory} />
                    </div>

                </div>

                {/* Quantity Counter + Order details /w submit in the right column */}
                <div className="flex flex-col gap-6">

                    {/* Item Quantity Field */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="quantity" className="text-[20px] text-dark-900 tracking-[-0.05em] font-semibold">Quantity</label>
                        <QuantityCounter count={count} setCount={setCount} />
                    </div>

                    {/* Order Details + Submit button */}
                    <div>
                        <h2>Order Details</h2>

                        <div>
                            <div>
                                <p>name</p>
                                <p>{name}</p>
                            </div>
                            <div>
                                <p>category</p>
                                <p>{category}</p>
                            </div>
                            <div>
                                <p>quantity</p>
                                <p>{count}</p>
                            </div>
                        </div>

                        <button type="submit">Submit</button>
                    </div>

                </div>
            </form>
        </div>
    );
}