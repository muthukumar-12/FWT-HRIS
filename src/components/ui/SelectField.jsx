import React from "react";

const SelectField = ({ label, name, value, onChange, options }) => {
  return (
    <div className="space-y-1">
      {label && <label className="block font-medium">{label}</label>}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      >
        <option value="">Select...</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
