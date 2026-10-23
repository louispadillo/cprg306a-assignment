"use client";
import ClearOrders from "./clear-orders";
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

    const clearOrders = () => {
        setOrders([]);
    }

    return (
        <main className="flex flex-row h-screen overflow-hidden w-screen bg-[#F4F6F5]">


            {/* side navbar */}
            <div className="flex flex-col h-screen border-r border-r-[#CCCCCC]">
                <SideNavbar />
            </div>


            {/* main content */}
            <main className="flex-1 flex flex-col min-w-0">


                {/* top navbar */}
                <div className="flex flex-row w-full border-b border-b-[#CCCCCC]">
                    <TopNavbar />
                </div>


                {/* input and output container */}
                <div className="grid grid-cols-[2fr_1fr] h-screen min-h-0">


                    {/* input content */}
                    <div className="flex-1 flex flex-row border-r border-r-[#CCCCCC]">
                        <InputOrder addOrder={addOrder} />
                    </div>


                    {/* output content */}
                    <div className="flex-1 flex flex-col py-[32px] gap-6 min-h-0">
                        <div className="flex flex-row justify-between px-[64px]">
                            <h2 className="text-[20px] font-semibold tracking-tighter text-dark-900">Recent Orders</h2>
                            <ClearOrders clearOrders={clearOrders} disabled={orders.length === 0}/>
                        </div>
                        <div className="overflow-y-auto flex flex-col flex-1 gap-3 px-[64px] scrollbar-thin scrollbar-thumb-dark-700">
                            {orders.map((order, index) => (
                            <OrderOutput 
                                key={index}
                                name={order.name}
                                category={order.category}
                                quantity={order.quantity}
                                date={order.date}
                            />
                        ))}
                        </div>
                    </div>
                </div>
            </main>
        </main>
    );
}