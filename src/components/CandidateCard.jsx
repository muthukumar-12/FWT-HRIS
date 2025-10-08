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
       
      <div className="border rounded-lg shadow-sm p-4 mb-4 flex justify-between items-center hover:shadow-md transition">
        <div>
          <h3 className="text-lg font-semibold text-orange-400">{candidate.name}</h3>
          <p className="text-sm text-gray-500">{candidate.email}</p>
          <p className="text-sm text-gray-500">Applied for: {candidate.role}</p>
          <p className="text-sm text-gray-500">Phone no: {candidate.phone}</p>
        </div>

        <div>
          <Button type="button" variant="primary2" onClick={handleViewResume}>
            View 
          </Button>
          <Button type="button" variant="primary2" onClick={handleSchedule}>
            Schedule
          </Button>
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
