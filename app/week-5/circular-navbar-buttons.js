"use client";
import Link from "next/link";
import { ArrowLeftIcon, BasketIcon } from "@phosphor-icons/react";

const buttonTypes = {
    logo: { label: "CPRG", content: "CPRG", className: "bg-linear-to-b from-[#8FC2F1] to-[#B7B0F8] text-white" },
    orderDashboard: { label: "Order Dashboard", content: <BasketIcon size={36} />, href: "/week-5" },
    goback: { label: "Go Back", content: <ArrowLeftIcon size={36} />, href: "/" },
};

export default function CircularNavbarButtons({ type, active = false, onClick, href}) {
    const button = buttonTypes[type];
    const link = href ?? button.href;

    // if a button type has a className, the code will use that, if not, it will default to this:
    const buttonColors = button.className
        ?? (active ? "bg-dark-900 text-white ring-inset ring-2 ring-[#E59292]" : "bg-white text-dark-900")

    const buttonStyles = `flex size-[60px] justify-center items-center rounded-full ${buttonColors}`;

    if (link) {
        return (
            <Link href={link} className={buttonStyles}>
                {button.content}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={buttonStyles}>
            {button.content}
        </button>
    );
}