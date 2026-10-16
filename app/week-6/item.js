export default function Item({ name, quantity, category }) {
  return (
    <li className="rounded-xl border border-teal-200 bg-white p-4 shadow-sm dark:border-teal-900 dark:bg-slate-900">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{name}</h2>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
        Buy {quantity} · {category}
      </p>
    </li>
  );
}
