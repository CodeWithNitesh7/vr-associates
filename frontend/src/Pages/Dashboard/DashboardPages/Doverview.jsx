import React, { useEffect, useState } from "react";
import {
  Briefcase,
  Users,
  Globe,
  Zap,
  MessageCircle,
  Activity,
  Bell,
} from "lucide-react";

//   Import your APIs
// import { getAllServices } from "../../../api/serviceApi.js";
import { getAllClients } from "../../../api/Services/clientApi.js";
import { getAllWebApps } from "../../../api/Services/web&appApi.js";
import { getAllContacts } from "../../../api/contactApi.js"; //   for leads/messages

export default function Doverview() {
  const [stats, setStats] = useState({
    services: 6,
    clients: 0,
    websites: 0,
    apps: 0,
    leads: 0,
  });

  const [notifications, setNotifications] = useState([]);

  //   Fetch dynamic stats from APIs
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [clients, webApps, contacts] = await Promise.all([
          // getAllServices(),
          getAllClients(),
          getAllWebApps(),
          getAllContacts(),
        ]);

        setStats({
          // services: services?.length || 0,
          clients: clients?.length || 0,
          websites: webApps?.filter((item) => item.type === "Web").length || 0,
          apps: webApps?.filter((item) => item.type === "App").length || 0,
          leads: contacts?.length || 0,
        });

        //   Example notifications (dynamic suggestion)
        setNotifications([
          { id: 1, message: `Fetched ${clients.length} clients`, time: "Just now" },
          { id: 2, message: `Fetched ${webApps.length} web/app projects`, time: "Just now" },
          { id: 3, message: `Fetched ${contacts.length} leads`, time: "Just now" },
        ]);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    { id: 1, label: "Services", icon: <Briefcase />, value: stats.services, color: "bg-blue-500" },
    { id: 2, label: "Clients", icon: <Users />, value: stats.clients, color: "bg-indigo-500" },
    { id: 3, label: "Websites", icon: <Globe />, value: stats.websites, color: "bg-green-500" },
    { id: 4, label: "Apps", icon: <Zap />, value: stats.apps, color: "bg-orange-500" },
    { id: 5, label: "Leads", icon: <MessageCircle />, value: stats.leads, color: "bg-red-500" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <Activity className="text-indigo-600" /> Dashboard Overview
        </h1>
        <Bell className="text-gray-600 w-6 h-6" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
        {statCards.map((stat) => (
          <div
            key={stat.id}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`p-3 rounded-full text-white ${stat.color} shadow-md`}>
                {stat.icon}
              </div>
              <span className="text-2xl font-bold text-gray-800">{stat.value}</span>
            </div>
            <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Notifications */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4">
          {notifications.length === 0 ? (
            <p className="text-gray-500">No recent activities yet.</p>
          ) : (
            <ul className="divide-y divide-gray-100">
              {notifications.map((note) => (
                <li key={note.id} className="py-3 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Activity className="text-indigo-500 w-5 h-5" />
                    <span className="text-gray-700">{note.message}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{note.time}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
