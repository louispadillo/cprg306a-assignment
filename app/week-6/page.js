import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="min-h-screen bg-slate-100 flex justify-center p-10">

            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-lg p-8">

                <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
                    Shopping List
                </h1>

                <ItemList />

            </div>

        </main>
    );
}