import CircularNavbarButtons from "./circular-navbar-buttons";

export default function SideNavbar() {
    return (
        <nav className="flex flex-col h-screen bg-linear-to-b from-[#CDE1E5] to-[#D3C1E7] m-1 p-1 rounded-full items-center justify-between">
            {/* logo */}
            <CircularNavbarButtons type="logo"/>

            {/* section buttons */}
            <div className="flex flex-col gap-3">
                <CircularNavbarButtons type="orderDashboard" active/>
            </div>

            {/* back */}
            <CircularNavbarButtons type="goback" />
        </nav>
    );
}