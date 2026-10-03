"use client";
import { useState } from "react";
import QuantityCounter from "./quantity-counter";

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
        if (inputName.length > 0) {
            setName(inputName);
        }
    }

    const handleCategoryChange = (e) => {
        let inputCategory = e.target.value;
        setCategory(inputCategory.toUpperCase());
    }

    const handleQuantityChange = (e) => {
        let inputQuantity = parseInt(e.target.value);
        if (inputQuantity >= 0) {
            setCount(inputQuantity);
        }
    } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>

                    {/* Item Name Field */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-[20px] text-dark-900 tracking-[-5%] font-semibold">Name of item</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter item name"
                            value={name}
                            onChange={(e) => handleNameChange(e)}
                            className="border border-dark-600 rounded-full p-[16px] text-[16px] text-dark-900 tracking-[-5%] w-[400px] h-[54px]"
                        />
                    </div>

                    {/* Item Category Field */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="category" className="text-[20px] text-dark-900 tracking-[-5%] font-semibold">Category</label>
                        <input
                            type="text"
                            id="category"
                            placeholder="Enter item category"
                            value={category}
                            onChange={(e) => handleCategoryChange(e)}
                            className="border border-dark-600 rounded-full p-[16px] text-[16px] text-dark-900 tracking-[-5%] w-[400px] h-[54px]"
                        />
                    </div>

                    <label htmlFor="quantity" className="text-[20px] text-dark-900 tracking-[-5%] font-semibold">Quantity</label>
                    <QuantityCounter count={count} setCount={setCount} />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                {name.length === 10 && (
                    <p>Name must be exactly 10 characters or less</p>
                )}
                {name.length > 0 && <p>Name {name}</p>}
                {category.length > 0 && <p>Category {category}</p>}
                {count > 0 && <p>Quantity {count}</p>}
            </div>
        </div>
    );
}