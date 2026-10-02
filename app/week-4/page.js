import GoBack from "../go-back";
import NewItem from "./new-item";

export default function Page() {
    return (
        <main>
            <h1 className="font-bold text-[24px] text-black tracking-[-0.64px] pt-6 pl-6">
                Quantity Counter
            </h1>
            <div className="flex flex-col items-center">
                <NewItem />
                <GoBack />
            </div>
        </main>
    );
}