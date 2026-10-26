export default function ClearOrders({ clearOrders, disabled }) {
    return(
        <button
            type="button"
            onClick={clearOrders}
            disabled={disabled}
            className="px-[12px] py-[6px] text-[14px] font-medium tracking-tighter text-white bg-[#C71C1C] hover:bg-[#670E0E] disabled:bg-dark-600 enabled:active:scale-95 transition-transform duration-100 rounded-[12px]"
        >
            Clear All
        </button>
    );
}