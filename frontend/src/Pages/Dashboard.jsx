import React, { useState } from 'react';
import {
    HomeIcon, UsersIcon, BuildingOffice2Icon, ChartBarIcon, Cog6ToothIcon, BriefcaseIcon,
    ArrowUpIcon, ArrowDownIcon, BellIcon, Bars3Icon, XMarkIcon
} from '@heroicons/react/24/outline';

// --- 1. DUMMY DATA FOR THE DASHBOARD ---
const kpiData = [
    { title: 'Active Job Listings', value: '42', change: '10.5%', isPositive: true },
    { title: 'New Candidates (30 Days)', value: '1,280', change: '3.2%', isPositive: true },
    { title: 'Successful Placements (MTD)', value: '14', change: '15.0%', isPositive: true },
    { title: 'Avg. Time-to-Hire (Days)', value: '35', change: '2.1%', isPositive: false },
];

const navItems = [
    { name: 'Dashboard', icon: HomeIcon, href: '#', current: true },
    { name: 'Job Listings', icon: BriefcaseIcon, href: '#', current: false },
    { name: 'Candidates', icon: UsersIcon, href: '#', current: false },
    { name: 'Clients & Companies', icon: BuildingOffice2Icon, href: '#', current: false },
    { name: 'Analytics & Reports', icon: ChartBarIcon, href: '#', current: false },
    { name: 'Settings', icon: Cog6ToothIcon, href: '#', current: false },
];

const recentActivity = [
    { type: 'Application', detail: 'New application for Senior Developer position.', time: '2 mins ago', color: 'text-indigo-500' },
    { type: 'Placement', detail: 'Alice Smith confirmed placement at TechCorp.', time: '1 hr ago', color: 'text-green-500' },
    { type: 'Client Lead', detail: 'New client inquiry from Finance Solutions Inc.', time: '4 hrs ago', color: 'text-yellow-500' },
    { type: 'Alert', detail: 'Job ID 502 has expired and been archived.', time: '1 day ago', color: 'text-red-500' },
];

// --- 2. THE MAIN DASHBOARD COMPONENT ---
const VRADashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Reusable KPI Card component logic (inline)
    const KPICard = ({ title, value, change, isPositive }) => {
        const changeColor = isPositive ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50';
        const Icon = isPositive ? ArrowUpIcon : ArrowDownIcon;

        return (
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition duration-300 hover:shadow-lg">
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <div className="mt-1 flex items-center justify-between">
                    <p className="text-3xl font-bold text-gray-900">{value}</p>
                    <div className={`flex items-center px-3 py-1 rounded-full text-xs font-semibold ${changeColor}`}>
                        <Icon className="h-4 w-4 mr-1" />
                        {change}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Mobile Sidebar Overlay */}
            <div
                className={`fixed inset-0 z-40 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}
                role="dialog"
                aria-modal="true"
            >
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
                <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-900">
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button
                            type="button"
                            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <span className="sr-only">Close sidebar</span>
                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </button>
                    </div>
                    {/* Mobile Sidebar Content */}
                    <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                        <div className="flex-shrink-0 flex items-center px-4 text-2xl font-bold text-white tracking-wider">
                            VR Associates
                        </div>
                        <nav className="mt-5 px-2 space-y-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${item.current
                                            ? 'bg-indigo-600 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                        }`}
                                >
                                    <item.icon className="mr-4 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            {/* Static Sidebar for Desktop */}
            <div className="hidden lg:flex lg:flex-shrink-0">
                <div className="flex flex-col w-64 bg-gray-900 h-screen">
                    <div className="p-6 text-2xl font-bold text-white tracking-wider">
                        VR Associates
                    </div>
                    <nav className="flex-1 px-2 py-4 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`group flex items-center px-4 py-2 text-sm font-medium rounded-lg transition duration-150 ease-in-out 
                                    ${item.current
                                        ? 'bg-indigo-600 text-white shadow-md'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                            >
                                <item.icon className="mr-3 h-6 w-6" aria-hidden="true" />
                                {item.name}
                            </a>
                        ))}
                    </nav>
                    <div className="p-4 border-t border-gray-700">
                        <p className="text-xs text-gray-500">Admin User</p>
                        <p className="text-sm font-medium text-white">John Doe</p>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
                {/* Header/Top Bar */}
                <header className="flex-shrink-0 flex items-center justify-between h-16 bg-white shadow-sm border-b border-gray-200 px-4 sm:px-6 lg:px-8">
                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="lg:hidden p-1 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <h1 className="text-xl font-semibold text-gray-900 hidden sm:block">Admin Dashboard Overview</h1>
                    <div className="flex items-center space-x-4">
                        <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <div className="text-sm font-medium text-indigo-600 hover:text-indigo-800 cursor-pointer hidden sm:block">
                            Sign Out
                        </div>
                    </div>
                </header>

                {/* Content Body */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-8">

                    {/* Section I: Key Performance Indicators (KPIs) */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-800 mb-4">The Vitals (KPIs)</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {kpiData.map((kpi, index) => (
                                <KPICard key={index} {...kpi} />
                            ))}
                        </div>
                    </section>

                    {/* Section II: Analytics & Activity */}
                    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Recent Activity/Alerts */}
                        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            <h2 className="text-lg font-bold text-gray-800 mb-4">Urgent Activity & Alerts</h2>
                            <ul className="space-y-4">
                                {recentActivity.map((activity, index) => (
                                    <li key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0 flex items-start space-x-3">
                                        <div className={`h-2.5 w-2.5 rounded-full ${activity.color.replace('text', 'bg')} mt-1.5`}></div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900">{activity.type}</p>
                                            <p className="text-sm text-gray-600 mt-0.5">{activity.detail}</p>
                                            <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Pipeline Funnel Placeholder */}
                        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col justify-center items-center h-96">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Recruitment Pipeline Funnel</h2>
                            <p className="text-gray-500 mb-4">
                                This section is reserved for the visual chart integration (e.g., conversion funnel).
                            </p>
                            <div className="w-full h-64 bg-indigo-50 rounded-lg flex items-center justify-center border-dashed border-2 border-indigo-200">
                                <span className="text-indigo-400 text-sm">CHART VISUALIZATION AREA</span>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
};

export default VRADashboard;