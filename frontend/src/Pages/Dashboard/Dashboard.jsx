import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header"; //   Corrected import

// Import all your dashboard components
import Dclients from "./DashboardPages/Dclient";
// import Dservices from "./DashboardPages/Dservices";
import Dweb from "./DashboardPages/Dweb";
import Dapp from "./DashboardPages/Dapp";
import Dpermanent from "./DashboardPages/Dpermanent";
import Dcontract from "./DashboardPages/Dcontract";
import Dmarketing from "./DashboardPages/Dmarketing";
import ContractLeads from "./DashboardPages/ContractLeads";
import Doverview from "./DashboardPages/Doverview";

export default function Dashboard() {
    const [activePage, setActivePage] = useState("dashboard");

    const handleLogout = () => {
        sessionStorage.removeItem("adminToken");
        sessionStorage.removeItem("adminInfo");
        window.location.href = "/admin";
    };


    //   Function to render selected content dynamically
    const renderContent = () => {
        switch (activePage) {
            case "clients":
                return <Dclients />;
            // case "services":
            //     return <Dservices />;
            case "website":
                return <Dweb />;
            case "app":
                return <Dapp />;
            case "permanent":
                return <Dpermanent />;
            case "contract":
                return <Dcontract />;
            case "marketing":
                return <Dmarketing />;
            case "leads":
                return <ContractLeads />;
            default:
                return (
                    // <div className="p-10 text-gray-800">
                    //     <h1 className="text-3xl font-bold">
                    //         Welcome to VR Associates Dashboard 👋
                    //     </h1>
                    //     <p className="text-gray-500 mt-2">
                    //         Select a section from the sidebar to get started.
                    //     </p>
                    // </div>
                    <Doverview />
                );
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar
                isOpen={true}
                onMenuClick={setActivePage}
                activeItem={activePage}
            />

            {/* Main Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto p-4">{renderContent()}</main>
            </div>
        </div>
    );
}
