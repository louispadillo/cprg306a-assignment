"use client";
import { PlusIcon, MinusIcon } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import QuantityInvalidDropdown from "./quantity-invalid-dropdown";

const variants = {
  enter: (dir) => ({ y: dir > 0 ? "100%" : "-100%" }),
  center: { y: 0 },
  exit: (dir) => ({ y: dir > 0 ? "-100%" : "100%" }),
};

export default function QuantityCounter({ quantity, setQuantity }) {
    const [direction, setDirection] = useState(1);
    const [warning, setWarning] = useState(null);

    // used to auto-hide the warning/ALERT after 2s
    useEffect(() => {
        if (!warning) return;
        const hideWarningTimer = setTimeout(() => setWarning(null), 2000);
        return () => clearTimeout(hideWarningTimer);
    }, [warning]);

    // add 1
    const increment = () => {
        if (quantity == 20) {
            setWarning("max");
        
        } else {
            setDirection(1)
            setQuantity(quantity + 1);
        }
    };

    // subtract 1
    const decrement = () => {
        if (quantity == 1) {
            setWarning("min");
        } else {
            setDirection(-1)
            setQuantity(quantity - 1);
        }
    };

    return (
        // Component's main container
        <div className="bg-white inline-flex flex-col justify-start gap-3 rounded-[12px] p-4 ring-1 ring-dark-600">
            <QuantityInvalidDropdown warning={warning} />
            {/* Container for the counter */}
            <div>
                <div className="relative overflow-hidden w-full h-[138px] p-2.5 gap-2.5 rounded-[10.8px] ring-1 ring-dark-600">
                    <AnimatePresence initial={false} custom={direction}>
                    <motion.p
                        key={quantity}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className=" absolute inset-0 flex justify-center items-center leading-none text-8xl text-black pb--1">
                        {quantity}
                    </motion.p>
                </AnimatePresence>
                </div>
            </div>
            

            {/* Container for both buttons */}
            <div className="gap-2 flex self-stretch justify-center items-center">
                {/* Add button */}
                <button
                    type="button"
                    onClick={increment}
                    disabled={quantity == 21}
                    className="flex-1 flex justify-center items-center p-2 bg-[#1CAE3C]  text-white hover:bg-[#0E5B1E] disabled:opacity-50 rounded-[10.8px] enabled:active:scale-95 transition-transform duration-100">
                    <PlusIcon size={24} />
                </button>


                {/* Minus button */}
                <button
                    type="button"
                    onClick={decrement}
                    disabled={quantity == 0}
                    className="flex-1 flex justify-center items-center p-2 bg-[#C71C1C] text-white hover:bg-[#670E0E] disabled:opacity-50 rounded-[10.8px] enabled:active:scale-95 transition-transform duration-100">
                    <MinusIcon size={24} />
                </button>
            </div>
        </div>
    );
}
