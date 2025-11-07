



import React, { useState, useMemo } from 'react';
import { LayoutDashboard, Users, Zap, Briefcase, Globe, Mail, Plus, X } from 'lucide-react';

// --- MOCK DATA ---
const initialServices = [
    { id: 1, name: 'Custom Backend API', price: 3500, description: 'High-performance Node.js API development.' },
    { id: 2, name: 'React Frontend Development', price: 4200, description: 'Responsive, state-of-the-art single-page applications.' },
    { id: 3, name: 'Cloud Infrastructure Setup', price: 1800, description: 'Managed AWS/GCP deployment and scaling.' },
];

const initialClients = [
    { id: 101, name: 'Alice Johnson', company: 'Innovate Solutions', status: 'Active' },
    { id: 102, name: 'Bob Smith', company: 'Digital Hub Inc.', status: 'On Hold' },
    { id: 103, name: 'Charlie Doe', company: 'FutureTech Ltd.', status: 'Active' },
];

const initialProjects = [
    { id: 201, name: 'Project Pulse (App)', type: 'Mobile App', status: 'Live', platform: 'iOS/Android' },
    { id: 202, name: 'Aura Landing Page (Website)', type: 'Website', status: 'Development', platform: 'Web' },
    { id: 203, name: 'Client Portal 3.0 (Website)', type: 'Web App', status: 'Maintenance', platform: 'Web' },
];

const initialLeads = [
    { id: 301, name: 'Emily Clark', email: 'emily@example.com', interest: 'Custom Backend API', date: '2024-10-25' },
    { id: 302, name: 'David Lee', email: 'david@sample.net', interest: 'React Frontend Development', date: '2024-10-24' },
    { id: 303, name: 'Fiona Green', email: 'fiona@web.co', interest: 'Website Redesign', date: '2024-10-23' },
];

const sidebarItems = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard, color: 'text-indigo-400' },
    { id: 'services', label: 'My Services', icon: Zap, color: 'text-emerald-400' },
    { id: 'clients', label: 'Clients', icon: Users, color: 'text-cyan-400' },
    { id: 'projects', label: 'Projects (Apps/Websites)', icon: Briefcase, color: 'text-amber-400' },
    { id: 'leads', label: 'Contact Leads', icon: Mail, color: 'text-red-400' },
];

// --- UTILITY COMPONENTS (Local to App) ---

// Component for displaying a key metric
const StatCard = ({ title, value, icon: Icon, color }) => (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-indigo-500 transition duration-300">
        <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-400">{title}</h3>
            <Icon className={`w-6 h-6 ${color}`} />
        </div>
        <p className="mt-2 text-3xl font-bold text-white">{value}</p>
    </div>
);

// Component for the main dashboard item lists (Services, Clients, Projects)
const ItemList = ({ title, items, renderItem, itemType, onAddItem }) => (
    <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-white">{title}</h2>
            <button
                onClick={() => onAddItem(itemType)}
                className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
                <Plus className="w-4 h-4" />
                <span>Add New {itemType}</span>
            </button>
        </div>
        <div className="space-y-4">
            {items.map(item => (
                <div key={item.id} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    {renderItem(item)}
                </div>
            ))}
        </div>
    </div>
);

// Component for the navigation sidebar
const Sidebar = ({ activeItem, setActiveItem }) => (
    <div className="w-64 bg-gray-900 h-screen p-6 flex flex-col shadow-2xl">
        <div className="text-2xl font-extrabold text-indigo-500 mb-10 tracking-wider">
            DevDash.
        </div>
        <nav className="space-y-2">
            {sidebarItems.map(item => (
                <button
                    key={item.id}
                    onClick={() => setActiveItem(item.id)}
                    className={`flex items-center w-full p-3 rounded-xl transition-all duration-200 ${activeItem === item.id
                        ? 'bg-indigo-600 text-white shadow-lg'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-indigo-400'
                        }`}
                >
                    <item.icon className={`w-5 h-5 mr-3 ${activeItem !== item.id && item.color}`} />
                    <span className="font-medium">{item.label}</span>
                </button>
            ))}
        </nav>
    </div>
);

// Component for the "Add New" Modal
const ModalForm = ({ itemType, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({});

    const getFields = () => {
        switch (itemType) {
            case 'Service':
                return [
                    { name: 'name', label: 'Service Name', type: 'text', placeholder: 'e.g., Next.js Frontend' },
                    { name: 'price', label: 'Price (USD)', type: 'number', placeholder: '3500' },
                    { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Detailed service description...' },
                ];
            case 'Client':
                return [
                    { name: 'name', label: 'Client Name', type: 'text', placeholder: 'Jane Doe' },
                    { name: 'company', label: 'Company Name', type: 'text', placeholder: 'Acme Corp' },
                ];
            case 'Project':
                return [
                    { name: 'name', label: 'Project Name', type: 'text', placeholder: 'iOS Fitness Tracker' },
                    { name: 'type', label: 'Type', type: 'select', options: ['Mobile App', 'Website', 'Web App'] },
                    { name: 'status', label: 'Status', type: 'select', options: ['Live', 'Development', 'Maintenance'] },
                ];
            default:
                return [];
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(itemType, { id: Date.now(), ...formData });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 p-8 rounded-xl w-full max-w-lg shadow-2xl border border-indigo-700">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-white">Add New {itemType}</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {getFields().map(field => (
                        <div key={field.name}>
                            <label htmlFor={field.name} className="block text-sm font-medium text-gray-300 mb-1">
                                {field.label}
                            </label>
                            {field.type === 'textarea' ? (
                                <textarea
                                    id={field.name}
                                    name={field.name}
                                    rows="3"
                                    required
                                    onChange={handleChange}
                                    placeholder={field.placeholder}
                                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500 transition"
                                ></textarea>
                            ) : field.type === 'select' ? (
                                <select
                                    id={field.name}
                                    name={field.name}
                                    required
                                    onChange={handleChange}
                                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500 appearance-none transition"
                                >
                                    <option value="" disabled selected>Select {field.label}</option>
                                    {field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                </select>
                            ) : (
                                <input
                                    id={field.name}
                                    name={field.name}
                                    type={field.type}
                                    required
                                    onChange={handleChange}
                                    placeholder={field.placeholder}
                                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-indigo-500 focus:border-indigo-500 transition"
                                />
                            )}
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg mt-6 transition duration-200 shadow-lg shadow-indigo-500/50"
                    >
                        Create {itemType}
                    </button>
                </form>
            </div>
        </div>
    );
};


// --- MAIN APP COMPONENT ---
export default function App() {
    const [activeView, setActiveView] = useState('dashboard');
    const [services, setServices] = useState(initialServices);
    const [clients, setClients] = useState(initialClients);
    const [projects, setProjects] = useState(initialProjects);
    const [leads, setLeads] = useState(initialLeads);
    const [modalType, setModalType] = useState(null); // null, 'Service', 'Client', 'Project'

    const totalRevenuePotential = useMemo(() =>
        services.reduce((sum, service) => sum + service.price, 0) * clients.length,
        [services, clients]
    );

    const activeProjectsCount = useMemo(() =>
        projects.filter(p => p.status !== 'Live').length,
        [projects]
    );

    const handleAddItem = (type, newItem) => {
        switch (type) {
            case 'Service':
                setServices(prev => [...prev, newItem]);
                break;
            case 'Client':
                setClients(prev => [...prev, { ...newItem, status: 'Active' }]);
                break;
            case 'Project':
                setProjects(prev => [...prev, { ...newItem, platform: newItem.type.includes('App') ? 'Mobile/Web' : 'Web' }]);
                break;
            default:
                console.error('Unknown item type');
        }
    };

    const handleOpenModal = (type) => {
        setModalType(type);
    };

    const handleCloseModal = () => {
        setModalType(null);
    };

    // --- VIEW RENDERING FUNCTIONS ---

    const renderDashboard = () => (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Clients" value={clients.length} icon={Users} color="text-cyan-400" />
                <StatCard title="Total Services" value={services.length} icon={Zap} color="text-emerald-400" />
                <StatCard title="Active Projects" value={activeProjectsCount} icon={Briefcase} color="text-amber-400" />
                <StatCard title="New Leads" value={leads.length} icon={Mail} color="text-red-400" />
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Quick Access: Recent Leads */}
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-semibold text-white mb-4">Recent Contact Leads</h2>
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700">
                        {leads.slice(0, 5).map(lead => (
                            <div key={lead.id} className="flex justify-between items-center py-3 border-b border-gray-700 last:border-b-0">
                                <div className="flex flex-col">
                                    <span className="text-white font-medium">{lead.name}</span>
                                    <span className="text-sm text-gray-400">{lead.interest}</span>
                                </div>
                                <span className="text-sm text-indigo-400">{lead.date}</span>
                            </div>
                        ))}
                        <button
                            onClick={() => setActiveView('leads')}
                            className="mt-4 w-full text-center text-indigo-400 hover:text-indigo-300 transition text-sm"
                        >
                            View All Leads →
                        </button>
                    </div>
                </div>

                {/* Service Potential */}
                <div className="lg:col-span-1">
                    <h2 className="text-2xl font-semibold text-white mb-4">Financial Overview</h2>
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-indigo-700">
                        <p className="text-gray-400 mb-2">Service Potential (Total Project Value)</p>
                        <p className="text-4xl font-extrabold text-emerald-400">
                            ${totalRevenuePotential.toLocaleString()}
                        </p>
                        <p className="mt-4 text-sm text-gray-500">
                            * Estimate based on current service pricing and active client count.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );

    const renderServices = () => (
        <ItemList
            title="My Services Catalog"
            itemType="Service"
            items={services}
            onAddItem={() => handleOpenModal('Service')}
            renderItem={(service) => (
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold text-emerald-400">{service.name}</h3>
                        <p className="text-gray-400 mt-1">{service.description}</p>
                    </div>
                    <span className="text-2xl font-extrabold text-white bg-gray-700 py-1 px-3 rounded-full">
                        ${service.price}
                    </span>
                </div>
            )}
        />
    );

    const renderClients = () => (
        <ItemList
            title="Active and Historical Clients"
            itemType="Client"
            items={clients}
            onAddItem={() => handleOpenModal('Client')}
            renderItem={(client) => (
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold text-cyan-400">{client.name}</h3>
                        <p className="text-gray-400 text-sm">{client.company}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${client.status === 'Active' ? 'bg-green-600/30 text-green-300' : 'bg-yellow-600/30 text-yellow-300'
                        }`}>
                        {client.status}
                    </span>
                </div>
            )}
        />
    );

    const renderProjects = () => (
        <ItemList
            title="Apps & Websites (Projects)"
            itemType="Project"
            items={projects}
            onAddItem={() => handleOpenModal('Project')}
            renderItem={(project) => (
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-semibold text-amber-400">{project.name}</h3>
                        <p className="text-gray-400 text-sm">
                            <span className="font-medium mr-2">{project.type}</span> | {project.platform}
                        </p>
                    </div>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${project.status === 'Live' ? 'bg-blue-600/30 text-blue-300' :
                        project.status === 'Development' ? 'bg-indigo-600/30 text-indigo-300' :
                            'bg-purple-600/30 text-purple-300'
                        }`}>
                        {project.status}
                    </span>
                </div>
            )}
        />
    );

    const renderLeads = () => (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Form Submissions (Leads)</h2>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                        <tr>
                            {['Name', 'Email', 'Interested In', 'Date'].map(header => (
                                <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {leads.map(lead => (
                            <tr key={lead.id} className="hover:bg-gray-700/50 transition">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{lead.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-400 hover:text-indigo-300">
                                    <a href={`mailto:${lead.email}`}>{lead.email}</a>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{lead.interest}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeView) {
            case 'dashboard':
                return renderDashboard();
            case 'services':
                return renderServices();
            case 'clients':
                return renderClients();
            case 'projects':
                return renderProjects();
            case 'leads':
                return renderLeads();
            default:
                return <p className="text-white">View not found.</p>;
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 flex font-sans">
            <Sidebar activeItem={activeView} setActiveItem={setActiveView} />

            <main className="flex-1 p-8 md:p-12 overflow-y-auto">
                <header className="mb-8">
                    <h1 className="text-4xl font-extrabold text-white capitalize">
                        {sidebarItems.find(item => item.id === activeView)?.label || 'Dashboard'}
                    </h1>
                    <p className="text-gray-400 mt-1">
                        Manage your assets, clients, and new opportunities.
                    </p>
                </header>

                {renderContent()}

                {/* Modal for adding new items */}
                {modalType && (
                    <ModalForm
                        itemType={modalType}
                        onClose={handleCloseModal}
                        onSubmit={handleAddItem}
                    />
                )}
            </main>
        </div>
    );
}