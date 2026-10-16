import Link from "next/link";
import ItemList from "./item-list";

export const metadata = { title: "Shopping List" };

export default function Page() {
  return (
    <main className="min-h-screen bg-teal-50 px-6 py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-medium text-teal-800 underline hover:text-teal-600 dark:text-teal-300">
          ← Back to Home
        </Link>
        <h1 className="mb-8 mt-6 text-4xl font-bold text-slate-900 dark:text-slate-100">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}
