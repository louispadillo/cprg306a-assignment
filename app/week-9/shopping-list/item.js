export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="cursor-pointer rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-blue-400 hover:shadow-md"
    >
      <h2 className="text-lg font-semibold text-slate-900">{name}</h2>
      <p className="mt-1 text-sm text-slate-600">
        Buy {quantity} · {category}
      </p>
    </li>
  );
}
