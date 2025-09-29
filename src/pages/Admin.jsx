import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Dashboard from "./Dashboard";
import JobPosting from "./JobPosting";
import Candidates from "./Candidates";

const Admin = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/job-posting" element={<JobPosting />} />
         <Route path="/admin/candidates" element={<Candidates />}/>
      </Routes>
    </Layout>
  );
};

export default Admin;
