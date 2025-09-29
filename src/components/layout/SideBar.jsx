import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, PanelLeft, FileText, Users } from "lucide-react";


const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { path: "/admin", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { path: "/admin/job-posting", label: "Job Posting", icon: <FileText size={20} /> },
    { path: "/admin/candidates", label: "Candidate List", icon: <Users size={20} /> },
  ];

  return (
    <div
      className={`${isOpen ? "w-64" : "w-14"
        } min-h-screen bg-white border-r transition-all duration-300 ease-in-out flex flex-col `}
    >
      
      <div className="p-3 flex items-center justify-between">
        {isOpen && (
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png"   
              alt="Company Logo"
              className="h-12 w-11 object-contain"
            />
            <span className="text-base text-slate-950 ">HRIS Dashboard </span>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 rounded-md  hover:bg-slate-200"
        >
          <PanelLeft size={18} />
        </button>
      </div>
      {isOpen && <hr className="border-gray-200 w-full" />}

       
      <nav className="space-y-1  flex-1 text-sm">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setActive(item.path)}
            className={`flex items-center gap-3 px-4 py-3 rounded-sm transition ${active === item.path
                ? "bg-blue-300 text-white font-semibold"
                : "hover:bg-blue-300 hover:text-white"
              }`}
          >
            {item.icon}
            {isOpen && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
