import React from "react";

const TextArea = ({ label, name, value, onChange, placeholder, rows = 4 }) => {
  return (
    <div className="space-y-1">
      {label && <label className="block font-medium">{label}</label>}
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="w-full border p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
    </div>
  );
};

export default TextArea;
