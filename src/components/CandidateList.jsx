import React from "react";
import CandidateCard from "./CandidateCard";

const CandidateList = ({ candidates }) => {
  return (
    <div className="max-w-4xl mx-auto mt-6">
      {candidates.map((c, index) => (
        <CandidateCard key={index} candidate={c} />
      ))}
    </div>
  );
};

export default CandidateList;
