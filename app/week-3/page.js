import GoBack from "../go-back";

export default function Page() {
    const dog1 = {
        name: "Yin Fang",
        age: 2,
        breed: "Shitzu",
        color: "Yellow"
    }
    return (
        <main>
            <h1 className="text-4xl text-red-500">Week 3 - Components and Props</h1>
            <h2 className="text-3xl text-blue-600">Dogs Information</h2>
            <section className="bg-slate-300 w-100">
                <h2 className="font-bold">{dog1.name}</h2>
                <p className="ml-4">Age: {dog1.age}</p>
                <p className="ml-4">Breed: {dog1.breed}</p>
                <p className="ml-4">Color: {dog1.color}</p>
            </section>
            <GoBack />
        </main>
    );
}