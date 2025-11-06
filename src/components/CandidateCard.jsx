import React, { useState } from "react";
import Button from "./ui/Button";

const CandidateCard = ({ candidate }) => {
  const [open, setOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);

  const handleViewResume = () => {
    setOpen(true);
  };

  const handleSchedule = () => {
    setScheduleOpen(true);
  };
 
  
  return (
    <>
       
      <div className="border rounded-lg shadow-sm p-4 mb-4 flex items-start hover:shadow-md transition relative">
        {/* Left: avatar/profile */}
        <div className="flex-shrink-0 mr-4">
          {candidate.avatarUrl ? (
            <img src={candidate.avatarUrl} alt={candidate.name} className="w-14 h-14 rounded-full object-cover" />
          ) : (
            <div className="w-14 h-14 rounded-full bg-gray-200 text-black flex items-center justify-center text-lg font-semibold">
              {candidate.name ? candidate.name.split(" ").map((n) => n[0]).slice(0, 2).join("") : "NA"}
            </div>
          )}
        </div>

        {/* Middle: candidate info */}
        <div className="flex-1">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{candidate.name}</h3>

            <div className="mt-1 flex flex-col sm:flex-row sm:items-center sm:gap-4">
              {/* Email with icon */}
              <div className="flex items-center text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m8 0l-4 4m4-4l-4-4" />
                </svg>
                <span className="truncate">{candidate.email}</span>
              </div>

              {/* Phone with +91 icon */}
              <div className="flex items-center text-sm text-gray-600 mt-1 sm:mt-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l2 5-1 2a11 11 0 005 5l2-1 5 2v2a2 2 0 01-2 2A19 19 0 013 5z" />
                </svg>
                <span className="truncate">{(String(candidate.phone || "").startsWith('+') ? '' : '+91 ')}{candidate.phone}</span>
              </div>
            </div>

            <p className="text-sm text-gray-700 mt-2">Applied for: {candidate.role}</p>

            {/* Experience */}
            {candidate.experience && (
              <p className="text-sm text-gray-700 mt-2">Experience: {candidate.experience}</p>
            )}

            {/* Skills row: dark black text */}
            <div className="mt-3 flex flex-wrap gap-2">
              {(candidate.skills || []).map((s, i) => (
                <span key={i} className="text-sm text-black px-2 py-1 border rounded-full bg-transparent">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: status on top, actions bottom */}
        <div className="ml-4 flex-shrink-0 flex flex-col justify-between items-end">
          {/* Status badge (top-right) */}
          <div className="self-end">
            {(() => {
              const status = (candidate.status || "Applied").toLowerCase();
              const map = {
                applied: "bg-gray-100 text-gray-800",
                interview: "bg-yellow-100 text-yellow-800",
                shortlisted: "bg-green-100 text-green-800",
                offered: "bg-blue-100 text-blue-800",
              };
              const cls = map[status] || "bg-gray-100 text-gray-800";
              return (
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${cls}`}>{candidate.status || "Applied"}</span>
              );
            })()}
          </div>

          {/* Buttons (bottom-right) */}
          <div className="mt-4 flex gap-x-2">
            <Button
              type="button"
              variant="primary2"
              onClick={() => window.open(candidate.linkedinUrl || candidate.resumeUrl || '#', '_blank')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h6m0 0v6m0-6L10 16" />
              </svg>
              View Profile
            </Button>

            <Button type="button" variant="primary2" onClick={handleSchedule}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule
            </Button>
          </div>
        </div>
      </div>
 

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-3/4 max-w-2xl p-6 shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-red-600 font-bold"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            {/* Resume Content */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{candidate.name}</h2>
            <p className="text-gray-600">{candidate.email}</p>
            <p className="text-gray-600">Phone: {candidate.phone}</p>
            <hr className="my-4" />

            <h3 className="text-xl font-semibold text-gray-700">Location</h3>
            <p className="mb-4">{candidate.location}</p>

            <h3 className="text-xl font-semibold text-gray-700">Job Type</h3>
            <p className="mb-4">{candidate.job}</p>

            <h3 className="text-xl font-semibold text-gray-700">Applied Role</h3>
            <p className="mb-4">{candidate.type}</p>

            <h3 className="text-xl font-semibold text-gray-700">Skills</h3>
            <ul className="list-disc list-inside mb-4">
              {(candidate.skills || []).map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-700">Experience</h3>
            <p>{candidate.experience}</p>

            <div className="mt-4">
              <Button type="button" variant="secondary"    className="hover:bg-blue-600 hover:scale-105 transition">
                Download
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Modal */}
      {scheduleOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-96 p-6 shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-red-600 font-bold"
              onClick={() => setScheduleOpen(false)}
            >
              ✕
            </button>

            <h2 className="text-xl font-bold text-gray-800 mb-4">Schedule Interview</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Date</label>
                <input
                  type="date"
                  className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Time</label>
                <input
                  type="time"
                  className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Mode</label>
                <select className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Online</option>
                  <option>Offline</option>
                </select>
              </div>

              <Button
                type="submit"
                variant="primary2"
                className="w-full hover:bg-green-600 hover:scale-105 transition"
              >
                Save Schedule
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CandidateCard;
