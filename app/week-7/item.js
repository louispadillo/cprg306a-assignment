export default function Item({ name, quantity, category }) {
  return (
    <li className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">{name}</h2>
      <p className="mt-1 text-sm text-slate-600">
        Buy {quantity} · {category}
      </p>
    </li>
  );
}
