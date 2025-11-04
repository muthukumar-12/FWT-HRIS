import React from "react";

/**
 * StatCard
 * Props:
 * - title: string
 * - count: number | string
 * - growth: number | string (e.g. "12%")
 * - trend: 'up' | 'down' (controls color/arrow)
 * - className: string additional classes
 */
const StatCard = ({ title, count, growth, trend = "up", className = "", icon = null }) => {
  const isUp = trend === "up";
  return (
    <div
      className={
        "bg-white border rounded-lg p-4 shadow-sm flex items-center justify-between " +
        className
      }
      role="region"
      aria-label={title}
    >
      <div className="flex items-center gap-4">
        {icon && (
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
            {icon}
          </div>
        )}

        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold text-gray-800 mt-2">{count}</p>
        </div>
      </div>

      <div className="ml-4 flex items-center">
        <span
          className={`inline-flex items-center px-2 py-1 text-sm rounded-full font-medium ${
            isUp ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}
        >
          <svg
            className={`w-4 h-4 mr-1 ${isUp ? "text-green-600" : "text-red-600"}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {isUp ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            )}
          </svg>
          {String(growth)}
        </span>
        <span className="text-xs text-gray-500 ml-2">vs last period</span>
      </div>
    </div>
  );
};

export default StatCard;
