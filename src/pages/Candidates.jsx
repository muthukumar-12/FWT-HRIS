import React, { useState } from "react";
import sampleCandidates from "../data/Candidate_data";
import CandidateList from "../components/CandidateList";
import InputField from "../components/ui/InputField";

const statusOptions = ["All", "Applied", "Interview", "Shortlisted", "Offered"];

const Candidates = () => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");

  const filtered = sampleCandidates.filter((c) => {
    const matchesQuery = [c.name, c.email, c.role, c.type].join(" ").toLowerCase().includes(query.toLowerCase());
    const matchesStatus = active === "All" ? true : (c.status || "").toLowerCase() === active.toLowerCase();
    return matchesQuery && matchesStatus;
  });

  return (
    <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Candidate List</h2>

      {/* Search box*/}
      <div className="mb-4">
        <InputField
          placeholder="Search candidates by name, email, role..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          name="search"
        />
      </div>

      {/* Filters */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {statusOptions.map((s) => (
            <button
              key={s}
              onClick={() => setActive(s)}
              className={`px-3 py-1 rounded-full text-sm transition ${active === s ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Candidate List */}
      <CandidateList candidates={filtered} />
    </div>
  );
};

export default Candidates;
