import NewItem from "./new-item";

export default function Week5Page() {
    return (
        <main className="p-6">
            <a
                href="/"
                className="text-blue-500 hover:underline mb-4 inline-block"
            >
                ← Go Home
            </a>

            <h1 className="text-3xl font-bold mb-6">
                Week 5
            </h1>

            <NewItem />
        </main>
    );
}