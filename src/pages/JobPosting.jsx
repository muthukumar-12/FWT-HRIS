import React, { useState } from "react";
import InputField from "../components/ui/InputField";
import SelectField from "../components/ui/SelectField";
import TextArea from "../components/ui/TextArea";


const JobPosting = () => {
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    jobType: "",
    location: "",
    salary: "",
    openings: "",
    deadline: "",
    description: "",
    requirements: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Posted:", formData);
    alert("Job Posted Successfully!");
    setFormData({
      title: "",
      department: "",
      jobType: "",
      location: "",
      salary: "",
      openings: "",
      deadline: "",
      description: "",
      requirements: "",
    });
  };

  return (
    <div className="text-justify  rounded-xl shadow-md max-w-lg ">
      <h2 className="text-4xl font-bold text-orange-400 m-6">Post a New Job</h2>

      <form onSubmit={handleSubmit} className="bg-white p-6 space-y-1 ">
        <InputField
        
          name="title"
           
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter job title"
          required
        />

        <InputField
          name="department"
           
          value={formData.department}
          onChange={handleChange}
          placeholder="Enter department"
          required
        />

        <InputField
          name="location"
           
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter location"
          required
        />

        <SelectField
          name="jobType"
           
          value={formData.jobType}
          onChange={handleChange}
          options={["Internship", "Full-Time", "Part-Time", "Contract"]}
          required
        />

        <InputField
          name="salary"
           
          value={formData.salary}
          onChange={handleChange}
          placeholder="Enter salary range (e.g. ₹5L – ₹8L / year)"
        />

        <InputField
          name="openings"
       
          type="number"
          value={formData.openings}
          onChange={handleChange}
          placeholder="Number of openings"
        />

        <InputField
          name="deadline"
          placeholder="Application Deadline"
          type="date"
          value={formData.deadline}
          onChange={handleChange}
        />

        <TextArea
          name="description"
           
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter job description"
          rows={4}
          required
        />

        <TextArea
          name="requirements"
          
          value={formData.requirements}
          onChange={handleChange}
          placeholder="Enter job requirements (skills, qualifications, etc.)"
          rows={3}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-400 font-bold text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default JobPosting;
