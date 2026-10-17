export default function Item({ name, quantity, category }) {
    return (
        <li className="bg-slate-100 rounded-2xl p-4 mb-4 shadow">

            <h2 className="text-xl font-bold">
                {name}
            </h2>

            <p>
                Quantity: {quantity}
            </p>

            <p>
                Category: {category}
            </p>

        </li>
    );
}