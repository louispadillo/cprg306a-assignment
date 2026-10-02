import Link from "next/link";

export default function GoBackFilled() {
    return (
        <Link className="hover:bg-gray-700 inline-block bg-black font-bold text-[20px] text-white tracking-[-0.64px] mt-6 ml-6 py-2 px-4 rounded-xl" href="/">Go Back to Home</Link>
    );
}