"use client";
import InputOrder from "./input-order";
import OrderOutput from "./order-output";
import SideNavbar from "./side-navbar";
import TopNavbar from "./top-navbar";
import { useState } from "react";

export default function Page() {
    const [orders, setOrders] = useState([]);

    const addOrder = (newItem) => {
        setOrders([{ ...newItem, date: new Date() }, ...orders]);
    }

    return (
        <main className="flex flex-row h-screen w-screen bg-[#F4F6F5]">


            {/* side navbar */}
            <div className="flex flex-col h-screen border-r border-r-[#CCCCCC]">
                <SideNavbar />
            </div>


            {/* main content */}
            <div className="flex-1 flex flex-col">


                {/* top navbar */}
                <div className="flex flex-row w-full border-b border-b-[#CCCCCC]">
                    <TopNavbar />
                </div>


                {/* input and output container */}
                <div className="grid grid-cols-[2fr_1fr] h-screen">


                    {/* input content */}
                    <div className="flex-1 flex flex-row border-r border-r-[#CCCCCC]">
                        <InputOrder addOrder={addOrder} />
                    </div>


                    {/* output content */}
                    <div className="flex-1 flex flex-col px-[64px] py-[32px] gap-6">
                        <div className="flex flex-row justify-between">
                            <h2 className="text-[20px] font-semibold tracking-tighter text-dark-900">Recent Orders</h2>
                        </div>
                        {orders.map((order, index) => (
                            <OrderOutput 
                                key={index}
                                name={order.name}
                                category={order.category}
                                count={order.count}
                                date={order.date}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}