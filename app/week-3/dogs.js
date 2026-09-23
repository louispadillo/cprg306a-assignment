import Link from "next/link";

// Created a back to link to the home page for easier navigation.
export default function Dogs(dogInfo) {
    return (
        <section className="bg-slate-300 w-100">
                <h2 className="font-bold">{dogInfo.name}</h2>
                <p className="ml-4">Age: {dogInfo.age}</p>
                <p className="ml-4">Breed: {dogInfo.breed}</p>
                <p className="ml-4">Color: {dogInfo.color}</p>
        </section>
    );
}