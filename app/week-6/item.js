export default function Item({ name, quantity, category }) {
    return (
        <li className="bg-slate-200 p-4 rounded-lg mb-3">

            <h2 className="text-xl font-bold">
                {name}
            </h2>

            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>

        </li>
    );
}