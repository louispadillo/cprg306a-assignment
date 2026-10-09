"use client";
import { AnimatePresence, motion } from "motion/react";
import { WarningIcon } from "@phosphor-icons/react/dist/ssr";

export default function QuantityInvalidDropdown({ warning }) {
    return (
        <div className="pointer-events-none fixed inset-x-0 top-[28px] flex justify-center">
            <AnimatePresence>
                {warning && (
                    <motion.div
                        initial={{ y: -40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -40, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 800, damping: 30}}
                        className="flex flex-row bg-[#F7F8F8] rounded-full gap-2 text-[#C71C1C] font-semibold text-[16px] tracking-tighter p-4 shadow-md"
                    >
                        <WarningIcon size={24} weight="fill" color="#C71C1C"/>
                        Your item quantity can't {warning === "min" ? "go below 1" : "be above 20"}!
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}