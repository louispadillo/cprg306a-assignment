export default function Page() {

    const items = [
        {
            name: "milk, 4 L 🥛",
            quantity: 1,
            category: "dairy",
        },
        {
            name: "bread 🍞",
            quantity: 2,
            category: "bakery",
        },
        {
            name: "eggs, dozen 🥚",
            quantity: 2,
            category: "dairy",
        },
        {
            name: "bananas 🍌",
            quantity: 6,
            category: "produce",
        },
        {
            name: "broccoli 🥦",
            quantity: 3,
            category: "produce",
        },
        {
            name: "chicken breasts, 1 kg 🍗",
            quantity: 1,
            category: "meat",
        },
        {
            name: "pasta sauce 🍝",
            quantity: 3,
            category: "canned goods",
        },
        {
            name: "spaghetti, 454 g 🍝",
            quantity: 2,
            category: "dry goods",
        },
        {
            name: "toilet paper, 12 pack 🧻",
            quantity: 1,
            category: "household",
        },
        {
            name: "paper towels, 6 pack",
            quantity: 1,
            category: "household",
        },
        {
            name: "dish soap 🍽️",
            quantity: 1,
            category: "household",
        },
        {
            name: "hand soap 🧼",
            quantity: 4,
            category: "household",
        }
    ];


    return (
        <main className="min-h-screen bg-slate-100 p-8">

            <h1 className="text-4xl font-bold text-blue-600 mb-6">
                Shopping List
            </h1>

            <ul>
                {items.map((item, index) => (
                    <li 
                        key={index}
                        className="bg-slate-200 p-4 rounded-lg mb-3"
                    >
                        <h2 className="text-xl font-bold">
                            {item.name}
                        </h2>

                        <p>Quantity: {item.quantity}</p>
                        <p>Category: {item.category}</p>
                    </li>
                ))}
            </ul>

        </main>
    );
}
