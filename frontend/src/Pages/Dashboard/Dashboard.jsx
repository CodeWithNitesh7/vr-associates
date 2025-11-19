import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";

import Dclients from "./DashboardPages/Dclient";
import Dweb from "./DashboardPages/Dweb";
import Dapp from "./DashboardPages/Dapp";
import Dpermanent from "./DashboardPages/Dpermanent";
import Dcontract from "./DashboardPages/Dcontract";
import Dmarketing from "./DashboardPages/Dmarketing";
import ContractLeads from "./DashboardPages/ContractLeads";
import Doverview from "./DashboardPages/Doverview";

export default function Dashboard() {
    const [activePage, setActivePage] = useState("dashboard");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // ✅ responsive

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const renderContent = () => {
        switch (activePage) {
            case "clients":
                return <Dclients />;
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
                return <Doverview />;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            
            {/* Sidebar */}
            <Sidebar
                isOpen={isSidebarOpen}
                onMenuClick={(page) => {
                    setActivePage(page);
                    setIsSidebarOpen(false); // close sidebar on mobile when clicking
                }}
                activeItem={activePage}
            />

            {/* Main Area */}
            <div className="flex-1 flex flex-col overflow-hidden">

                {/* Header with mobile menu button */}
                <Header onMenuClick={toggleSidebar} />

                <main className="flex-1 overflow-y-auto p-4">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
}
