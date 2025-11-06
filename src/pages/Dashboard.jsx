import React from "react";
import StatCard from "../components/ui/StatCard";
import dashboardStats from "../data/dashboard_stats";


const Dashboard = ({ stats = dashboardStats }) => {
  const metrics = [
    { key: "candidates", title: "Candidates" },
    { key: "applications", title: "Applications" },
    { key: "jobs", title: "Total Jobs" },
  ];

  return (
    <div>
      <h5 className="text-[30px] text-black font-bold"> Dashboard</h5>
      <div className="text-sm text-gray-600 mb-6">Welcome back! Here's what's happening today</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((m) => {
          const data = stats[m.key] || {};
          const count = data.count ?? "—";
          const growth = data.growth ?? "—";
          const trend = data.trend ?? "up";

          
          let icon = null;
          if (m.key === "candidates") {
            icon = (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m0-4a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            );
          } else if (m.key === "applications") {
            icon = (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 0a2 2 0 012 2v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6a2 2 0 012-2h2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10V6a2 2 0 012-2h2l2 2h2a2 2 0 012 2v4" />
              </svg>
            );
          } else if (m.key === "jobs") {
            icon = (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.657-1.567-3-3.5-3S5 9.343 5 11s1.567 3 3.5 3S12 12.657 12 11z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6" />
              </svg>
            );
          }

          return (
            <StatCard key={m.key} title={m.title} count={count} growth={growth} trend={trend} icon={icon} />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
