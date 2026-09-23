import Item from "./item";

export default function ItemList() {
    // Each item is a plain object with name, quantity, and category properties.
    const item1 = {
        name: "Evolving Skies ETB",
        quantity: 1,
        category: "Pokemon TCG",
    };

    const item2 = {
        name: "Surging Sparks Booster Box",
        quantity: 2,
        category: "Pokemon TCG",
    };

    const item3 = {
        name: "Card Sleeves, 65 pack",
        quantity: 4,
        category: "Accessories",
    };

    const item4 = {
        name: "Deck Box",
        quantity: 1,
        category: "Accessories",
    };

    // Pass each object's properties to the Item component as props.
    return (
        <section className={`font-vietnam leading-normal w-fit flex flex-col gap-[24px] p-6`}>
            {/* Display the items in a row */}
            <ul className="flex gap-[12px] items-center">
                <Item name={item1.name} quantity={item1.quantity} category={item1.category} />
                <Item name={item2.name} quantity={item2.quantity} category={item2.category} />
                <Item name={item3.name} quantity={item3.quantity} category={item3.category} />
                <Item name={item4.name} quantity={item4.quantity} category={item4.category} />
            </ul>
        </section>
    );
}
