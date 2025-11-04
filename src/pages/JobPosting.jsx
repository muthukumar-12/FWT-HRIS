import React, { useState } from "react";
import jobsData from "../data/jobs";
import InputField from "../components/ui/InputField";
import SelectField from "../components/ui/SelectField";
import TextArea from "../components/ui/TextArea";

const IconView = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const IconEdit = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const IconDelete = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3" />
  </svg>
);

const JobPosting = () => {
  const [jobs, setJobs] = useState(jobsData);
  const [isOpen, setIsOpen] = useState(false);
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

  const handleView = (job) => {
    alert(`View job: ${job.title}`);
  };

  const handleEdit = (job) => {
    alert(`Edit job: ${job.title}`);
  };

  const handleDelete = (id) => {
    if (confirm("Delete this job?")) {
      setJobs((prev) => prev.filter((j) => j.id !== id));
    }
  };

  const openForm = () => setIsOpen(true);
  const closeForm = () => {
    setIsOpen(false);
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

  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextId = jobs.length ? Math.max(...jobs.map((j) => j.id)) + 1 : 1;
    const newJob = {
      id: nextId,
      title: formData.title || "Untitled",
      department: formData.department || "",
      location: formData.location || "",
      openings: formData.openings || 1,
      postedAt: new Date().toISOString().split("T")[0],
    };
    setJobs((prev) => [newJob, ...prev]);
    closeForm();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Job Postings</h2>
        <button onClick={openForm} className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Add Job Post
        </button>
      </div>

      <div className="space-y-3">
        {jobs.map((job) => (
          <div key={job.id} className="flex items-center justify-between bg-white border rounded-lg p-4 shadow-sm">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
              <p className="text-sm text-gray-500">{job.department} • {job.location} • {job.openings} openings</p>
              <p className="text-xs text-gray-400 mt-1">Posted on {job.postedAt}</p>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={() => handleView(job)} className="p-2 rounded hover:bg-gray-100" title="View">
                <IconView />
              </button>
              <button onClick={() => handleEdit(job)} className="p-2 rounded hover:bg-gray-100" title="Edit">
                <IconEdit />
              </button>
              <button onClick={() => handleDelete(job.id)} className="p-2 rounded hover:bg-red-50 text-red-600" title="Delete">
                <IconDelete />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Drawer for Add Job */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Post a New Job</h3>
              <button onClick={closeForm} className="text-gray-500 hover:text-gray-700">Close</button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <InputField name="title" value={formData.title} onChange={handleChange} placeholder="Enter job title" required />
              <InputField name="department" value={formData.department} onChange={handleChange} placeholder="Enter department" required />
              <InputField name="location" value={formData.location} onChange={handleChange} placeholder="Enter location" required />
              <SelectField name="jobType" value={formData.jobType} onChange={handleChange} options={["Internship", "Full-Time", "Part-Time", "Contract"]} />
              <InputField name="salary" value={formData.salary} onChange={handleChange} placeholder="Enter salary range" />
              <InputField name="openings" type="number" value={formData.openings} onChange={handleChange} placeholder="Number of openings" />
              <InputField name="deadline" type="date" value={formData.deadline} onChange={handleChange} />
              <TextArea name="description" value={formData.description} onChange={handleChange} placeholder="Enter job description" rows={4} />
              <TextArea name="requirements" value={formData.requirements} onChange={handleChange} placeholder="Enter job requirements" rows={3} />

              <div className="flex gap-2 justify-end">
                <button type="button" onClick={closeForm} className="px-4 py-2 rounded border">Cancel</button>
                <button type="submit" className="px-4 py-2 rounded bg-blue-500 text-white">Post Job</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobPosting;
