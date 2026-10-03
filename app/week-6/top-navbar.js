
"use client";
import { BasketIcon } from "@phosphor-icons/react";

export default function TopNavbar() {
    return (
        <div className="flex felx-col gap-2 items-center justify-start p-[20px]">
            <BasketIcon size={24} className="text-dark-900" />
            <h1 className="text-[24px] font-bold tracking-[-5%] text-dark-900">Order Dashboard</h1>
        </div>
    );
}
