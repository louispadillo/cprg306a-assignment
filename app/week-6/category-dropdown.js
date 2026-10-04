"use client";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CaretDownIcon } from "@phosphor-icons/react";

const groups = [
    { name: "fresh",  bg: "bg-[#E6F6EA]", text: "text-[#1A8A3A]", items: ["Bakery", "Dairy", "Meat", "Produce"] },
    { name: "frozen", bg: "bg-[#D8F0F5]", text: "text-[#157A8C]", items: ["Frozen Foods"] },
    { name: "pantry", bg: "bg-[#F5E1CE]", text: "text-[#A0430A]", items: ["Beverages", "Canned Goods", "Dry Goods", "Snacks"] },
    { name: "other",  bg: "bg-[#F1E0F8]", text: "text-[#5B1478]", items: ["Household", "Other"] },
];

export default function CategoryDropdown({ value, onChange }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    // close when clicking outside or pressing Escape
    useEffect(() => {
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };

        const handleKey = (e) => e.key === "Escape" && setOpen(false);
            document.addEventListener("mousedown", handleClick);
            document.addEventListener("keydown", handleKey);
                return () => {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("keydown", handleKey);
        };
    }, []);

    const select = (item) => {
        onChange(item);
        setOpen(false);
    };

    return (
        <div ref={ref} className="overflow-hidden rounded-[27px] border border-dark-600 bg-white">
            {/* Header — always visible */}
            <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                className="flex h-[54px] w-full items-center justify-between px-5 text-[16px] text-dark-900 tracking-[-0.05em]"
            >
                {value}
                <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <CaretDownIcon size={24} />
                </motion.span>
            </button>

            {/* Groups — slide open/closed */}
            <AnimatePresence initial={false}>
                {open && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                >
                    <div className="flex flex-col gap-3 px-4 pb-4">
                    {groups.map((group) => (
                        <div key={group.name} className={`rounded-2xl px-3 py-3 ${group.bg}`}>
                        <p className={`mb-1 text-[14px] font-bold ${group.text}`}>{group.name}</p>
                        {group.items.map((item) => (
                            <button
                            key={item}
                            type="button"
                            onClick={() => select(item)}
                            className={`block w-full py-1 text-left text-[16px] tracking-[-0.05em] hover:text-dark-900
                                ${item === value ? "font-bold text-dark-900" : "text-dark-700"}`}
                            >
                            {item}
                            </button>
                        ))}
                        </div>
                    ))}
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}