import Link from "next/link";

// Created a back to link to the home page for easier navigation.
export default function GoBack() {
    return (
        <Link href="/">Go Back to Home</Link>
    );
}