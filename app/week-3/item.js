// A single item card: name at the top, then category and quantity underneath.
export default function Item(item_info) {
    return (
        /*
            Styling:
            - White BG
            - Rounded corners: 12px
            - Shadow: 0px 2px 2px rgba(0, 0, 0, 0.1)
            - Padding: 12px
            - Minimum width: 300px
            - Gap between name and category/quantity: 24px
            - Gap between category and quantity: 8px
            - Name font: Bold, 20px, black, tracking -0.56px
            - Category/Quantity font: Medium, 16px, #333, tracking -0.4px
            - Added a red vertical line to the left of the name for visual interest.
        */
        <li className="bg-white shadow-[0px_2px_2px_rgba(0,0,0,0.1)] flex flex-col gap-[24px] items-start p-[12px] rounded-xl min-w-[300px]">
            <div className="flex items-center gap-1">
                <div className="bg-[#d30000] rounded-[100px] w-[3px] h-[24px]"></div>
                <h3 className="font-bold text-[20px] text-black tracking-[-0.56px] whitespace-nowrap">
                    {item_info.name}
                </h3>
            </div>
            <div className="flex flex-col gap-[8px] text-[16px] tracking-[-0.4px]">
                <div className="flex flex-col">
                    <p className="font-bold text-[#333]">{item_info.category}</p>
                    <p className="font-medium text-[#666]">Category</p>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold text-[#333]">{item_info.quantity}</p>
                    <p className="font-medium text-[#666]">Quantity</p>
                </div>
            </div>
        </li>
    );
}
