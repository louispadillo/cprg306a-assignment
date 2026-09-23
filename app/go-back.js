import Link from "next/link";

// Created a back to link to the home page for easier navigation.
export default function GoBack() {
    return (
        <Link className="hover:bg-gray-700 inline-block bg-black font-bold text-[20px] text-white tracking-[-0.64px] mt-6 ml-6 py-2 px-4 rounded-xl" href="/">Go Back to Home</Link>
    );
}