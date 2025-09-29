import React from "react";

const InputField = ({ label, name, value, onChange, type = "text", placeholder }) => {
  return (
    <div className="space-y-2 ">
      {label && <label className="block font-medium">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
    </div>
  );
};

export default InputField;
