import React, { useState } from 'react';
import './ResumeDashboard.css';

const ResumeDashboard = () => {
  const [companyName, setCompanyName] = useState('');
  const [dashboardCreated, setDashboardCreated] = useState(false);

  const handleCreateDashboard = () => {
    if (companyName.trim() !== '') {
      setDashboardCreated(true);
    } else {
      alert('Please enter a company name.');
    }
  };

  return (
    <div className="dashboard-container">
      {!dashboardCreated ? (
        <div className="create-dashboard">
          <h2 className="dashboard-title">Create Company Dashboard</h2>
          <input
            type="text"
            className="company-input"
            placeholder="Enter Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <button className="create-button" onClick={handleCreateDashboard}>
            Create Dashboard
          </button>
        </div>
      ) : (
        <div className="dashboard">
          <h2 className="dashboard-heading">{companyName} Dashboard</h2>
          <div className="dashboard-cards">
            <div className="dashboard-card">
              <h3>No. of Users</h3>
              <p>10</p> {/* Example data */}
            </div>
            <div className="dashboard-card">
              <h3>Selected Resumes</h3>
              <p>5</p> {/* Example data */}
            </div>
            <div className="dashboard-card">
              <h3>Rejected Resumes</h3>
              <p>3</p> {/* Example data */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeDashboard;
