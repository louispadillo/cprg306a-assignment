import GoBack from "../go-back";
import Dogs from "./dogs";

export default function Page() {
    const dogsList = [
        { name: "Yin Fang", age: 2, breed: "Shitzu", color: "Yellow" },
        { name: "Zhang Zhang", age: 4, breed: "Labrador", color: "Black" },
        { name: "Yumi", age: 3, breed: "Golden Retriever", color: "Yellow" }
    ]

    return (
        <main>
            <h1 className="text-4xl text-red-500">Week 3 - Components and Props</h1>
            <h2 className="text-3xl text-blue-600">Dogs Information</h2>

            {/*index would be the number on the array, dog would hold the push the info for each dog object in the dogList */}
            {dogsList.map((dog, index) => ( // essentially a for loop that creates a link for each week in the weeks array

                <Dogs key={index} {...dog} />
            ))}

            <GoBack />
        </main>
    );
}