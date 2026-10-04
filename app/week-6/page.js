import InputOrder from "./input-order";
import SideNavbar from "./side-navbar";
import TopNavbar from "./top-navbar";

export default function Page() {
    return (
        <main className="flex flex-row h-screen w-screen bg-[#F4F6F5]">


            {/* side navbar */}
            <div className="flex flex-col h-screen border-r border-r-[#CCCCCC]">
                <SideNavbar />
            </div>


            {/* main content */}
            <div className="flex-1 flex flex-col">


                {/* top navbar */}
                <div className="flex flex-row w-full border-b border-b-[#CCCCCC]">
                    <TopNavbar />
                </div>


                {/* input and output container */}
                <div className="grid grid-cols-[3fr_1fr] h-screen">


                    {/* input content */}
                    <div className="flex-1 flex flex-row border-r border-r-[#CCCCCC]">
                        <InputOrder />
                    </div>


                    {/* output content */}
                    <div className="flex-1 flex flex-col ">

                    </div>
                </div>
            </div>
        </main>
    );
}