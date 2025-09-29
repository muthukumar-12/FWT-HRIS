import React from "react";
import sampleCandidates from "../data/Candidate_data";
import CandidateList from "../components/CandidateList";

const Candidates = () => {
  return (
    <div className=" p-6 border rounded-lg shadow-sm justify-between items-center hover:shadow-md transition">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">
        Candidate List
      </h2>
      <CandidateList candidates={sampleCandidates} />
    </div>
  );
};

export default Candidates;
