import SideNavbar from "./side-navbar";

export default function Page() {
    return (
        <main className="flex flex-row h-screen w-screen bg-[#F4F6F5]">


            {/* side navbar */}
            <div className="flex flex-col h-screen bg-white">
                {/* actual side bar */}
                <SideNavbar />
            </div>


            {/* main content */}
            <div className="flex-1 flex flex-col">


                {/* top navbar */}
                <div className="flex flex-row h-[80px] w-full bg-blue-500">
                    <h1>Order Dashboard</h1>
                </div>


                {/* input and output container */}
                <div className="flex-1 flex flex-row">


                    {/* input content */}
                    <div className="flex-1 flex flex-row bg-green-500">

                    </div>


                    {/* output content */}
                    <div className="flex-1 flex flex-col bg-orange-500">

                    </div>
                </div>
            </div>
        </main>
    );
}