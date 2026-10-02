import Link from "next/link";
import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Link
        href="/"
        className="absolute left-4 top-4 rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
      >
        Home
      </Link>

      <NewItem />
    </main>
  );
}
