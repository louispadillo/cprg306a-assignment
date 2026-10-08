export default function OrderOutput({ name, category, quantity, date }) {
const dateOfOrder = date.toLocaleDateString("en-US", { month: "long", day: "numeric"});
const timeOfOrder = date
    .toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit"})
    .replace(/\s/g, "");

    return (
        <div className="flex flex-col bg-white border border-dark-600 rounded-[12px] p-4 gap-6">
            <div className="flex flex-row justify-between">
                <p className="text-[16px] tracking-tighter font-semibold text-dark-700">{dateOfOrder}</p>
                <p className="text-[16px] tracking-tighter font-semibold text-dark-700">{timeOfOrder}</p>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-1">
                    <p className="text-[14px] font-medium tracking-tighter text-dark-700">name</p>
                    <p className="text-[16px] tracking-tighter font-semibold text-dark-800">{name}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-[14px] font-semibold tracking-tighter text-dark-700">category</p>
                    <p className="text-[16px] tracking-tighter font-semibold text-dark-800">{category}</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-[14px] font-semibold tracking-tighter text-dark-700">quantity</p>
                    <p className="text-[16px] tracking-tighter font-semibold text-dark-800">{quantity}</p>
                </div>
            </div>
        </div>
    );
}