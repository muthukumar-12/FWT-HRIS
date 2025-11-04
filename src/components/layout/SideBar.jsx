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

  // animate only width for smooth slide; labels use max-width+opacity so icons and logo don't shift
  const sidebarStyle = { transition: "width 420ms cubic-bezier(.2,.8,.2,1)" };

  return (
    <div
      style={sidebarStyle}
      className={`${isOpen ? "w-64" : "w-14"} min-h-screen bg-white border-r flex flex-col `}
    >
      
      <div className={`p-3 flex items-center ${isOpen ? 'justify-between' : 'justify-center'}`}>
        <div className="flex items-center">
          <div className={`flex-shrink-0 transition-all duration-300 ease-out overflow-hidden ${isOpen ? 'opacity-100 w-11' : 'opacity-0 w-0'}`}>
            <img
              src="/logo.png"
              alt="Company Logo"
              className="h-12 w-11 object-contain"
            />
          </div>
          <span
            className={`ml-2 text-base text-slate-950 overflow-hidden transition-all duration-300 ease-out ${
              isOpen ? 'opacity-100 max-w-[160px] translate-x-0' : 'opacity-0 max-w-0 -translate-x-2'
            }`}
          >
            HRIS Dashboard
          </span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-1 rounded-md hover:bg-slate-200 ${!isOpen ? '-translate-x-1' : ''}`}
          aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          <PanelLeft size={18} />
        </button>
      </div>
  <hr className={`border-gray-200 w-full transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />

       
      <nav className="space-y-1  flex-1 text-sm">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setActive(item.path)}
            className={`flex items-center ${isOpen ? 'gap-3 px-4' : 'justify-center px-0'} py-3 rounded-sm transition-colors duration-200 ${active === item.path
                ? "bg-blue-300 text-white font-semibold"
                : "hover:bg-blue-300 hover:text-white"
              }`}
          >
            <div className="flex-shrink-0 text-slate-700">{item.icon}</div>
            <span className={`overflow-hidden transition-all duration-250 ease-out ${isOpen ? 'opacity-100 max-w-[140px] ml-2' : 'opacity-0 max-w-0 ml-0'}`}>
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
