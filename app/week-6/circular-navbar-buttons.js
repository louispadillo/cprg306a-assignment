"use client";
import { ArrowLeftIcon, BasketIcon } from "@phosphor-icons/react";

const buttonTypes = {
    logo: { label: "CPRG", content: "CPRG" },
    orderDashboard: { label: "Order Dashboard", content: <BasketIcon size={36} /> },
    goback: { label: "Go Back", content: <ArrowLeftIcon size={36} /> },
};

export default function CircularNavbarButtons({ type, active = false, onClick}) {
    const button = buttonTypes[type];

    return (
        <button
            onClick={onClick}
            className={`flex size-[60px] justify-center items-center rounded-full
                ${active ? "bg-neutral-900 text-white ring-2 ring-rose-200" : "bg-white text-neutral-900"}`}
        >
            {button.content}
        </button>
    );
}