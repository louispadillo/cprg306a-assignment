"use client";
import { PlusIcon, MinusIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const variants = {
  enter: (dir) => ({ y: dir > 0 ? "100%" : "-100%" }),
  center: { y: 0 },
  exit: (dir) => ({ y: dir > 0 ? "-100%" : "100%" }),
};

export default function QuantityCounter({ count, setCount }) {
    const [direction, setDirection] = useState(1);

    // add 1
    const increment = () => {
        if (count >= 20) {
            alert("You have reached the max value of 20");
        
        } else {
            setDirection(1)
            setCount(count + 1);
        }
    };

    // subtract 1
    const decrement = () => {
        if (count <= 1) {
            alert("You can't go below 1");
        } else {
            setDirection(-1)
            setCount(count - 1);
        }
    };

    return (
        // Component's main container
        <div className="bg-white inline-flex flex-col justify-start gap-3 rounded-[12px] p-4 ring-1 ring-dark-600">

            {/* Container for the counter */}
            <div>
                <div className="relative overflow-hidden w-full h-[138px] p-2.5 gap-2.5 rounded-[10.8px] ring-1 ring-dark-600">
                    <AnimatePresence initial={false} custom={direction}>
                    <motion.p
                        key={count}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className=" absolute inset-0 flex justify-center items-center leading-none text-8xl text-black pb--1">
                        {count}
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
                    disabled={count == 20}
                    className="flex-1 flex justify-center items-center p-2 bg-[#1CAE3C]  text-white hover:bg-[#0E5B1E] disabled:opacity-50 rounded-[10.8px] enabled:active:scale-95 transition-transform duration-100">
                    <PlusIcon size={24} />
                </button>


                {/* Minus button */}
                <button
                    type="button"
                    onClick={decrement}
                    disabled={count == 1}
                    className="flex-1 flex justify-center items-center p-2 bg-[#C71C1C] text-white hover:bg-[#670E0E] disabled:opacity-50 rounded-[10.8px] enabled:active:scale-95 transition-transform duration-100">
                    <MinusIcon size={24} />
                </button>
            </div>
        </div>
    );
}
