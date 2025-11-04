import React from "react";
import StatCard from "../components/ui/StatCard";

// Assumption: the fourth card requested will be "Interviews". If you prefer a different metric (e.g. Hires), tell me and I'll swap it.
const Dashboard = () => {
  // Example / sample numbers — replace with real data or props as needed
  const stats = [
    { key: "jobs", title: "Total Jobs", count: 128, growth: "+12%", trend: "up" },
    { key: "applications", title: "Applications", count: 432, growth: "+5%", trend: "up" },
    { key: "candidates", title: "Candidates", count: 76, growth: "+8%", trend: "up" },
    { key: "interviews", title: "Interviews", count: 24, growth: "-3%", trend: "down" },
  ];

  return (
    <div>
      <h5 className="text-[30px] text-black font-bold"> Dashboard</h5>
      <div className="text-sm text-gray-600 mb-6">Welcome back! Here's what's happening today</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <StatCard key={s.key} title={s.title} count={s.count} growth={s.growth} trend={s.trend} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
